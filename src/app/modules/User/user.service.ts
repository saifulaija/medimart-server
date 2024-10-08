// user.service.ts
import httpStatus from 'http-status';
import crypto from 'crypto';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import { IUser } from './user.interface';
import path from 'path';
import fs from 'fs';
import emailSender from '../../utils/emailSender';
import { VerifiedEmailUser } from './user.constant';

const createUserIntoDB = async (payload: IUser) => {
  console.log(payload);

  // Check if user already exists
  const isExistUser = await User.findOne({ email: payload.email });

  if (isExistUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This email already exists');
  }

  // Generate a verification code
  const verifyCode = crypto.randomBytes(3).toString('hex');
  payload.verifyCode = verifyCode;

  // Create a new user
  const user = new User(payload);
  const result = await user.save();

  // await transporter.sendMail(mailOptions);
  const htmlFilePath = path.join(
    process.cwd(),
    '/src/templates/otp_template.html',
  );

  const htmlTemplate = fs.readFileSync(htmlFilePath, 'utf8');
  const htmlContent = htmlTemplate.replace('{{otpCode}}', verifyCode);
  await emailSender(payload.email, htmlContent);

  setTimeout(async () => {
    const user = await User.findById(result._id);
    if (user && !user.isVerified) {
      await User.findByIdAndDelete(user._id);
    }
  }, 59000);

  return result;
};

const verifyEmail = async (payload: VerifiedEmailUser) => {
  // Check the verify code
  const user = await User.findOne({
    verifyCode: payload.verifyCode,
  });

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid verification code');
  }

  // Update the user's isVerified status
  const result = await User.findByIdAndUpdate(
    user._id,
    { isVerified: true, verifyCode: null }, // Reset verifyCode after successful verification
    {
      new: true,
      runValidators: true,
    },
  );

  return result;
};

export const UserServices = {
  createUserIntoDB,
  verifyEmail,
};
