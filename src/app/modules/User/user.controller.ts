import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user is created successfully',
    data: result,
  });
});
const verifyEmail = catchAsync(async (req, res) => {
  const result = await UserServices.verifyEmail(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Email verify successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,verifyEmail
};
