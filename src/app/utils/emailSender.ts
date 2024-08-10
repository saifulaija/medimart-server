import nodemailer from 'nodemailer';
import config from '../config';

const emailSender = async (receiverEmail: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: config.sender_email,
      pass: config.app_password,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"MediMart" <saifulislamweb87@gmail.com>', // sender address
    to: receiverEmail, // list of receivers
    subject: 'Verify your email by OTP', // Subject line
    //   text: 'Hello world?', // plain text body
    html, // html body
  });

  console.log('Message sent: %s', info.messageId);
};

export default emailSender;

// import nodemailer from 'nodemailer';
// import config from '../config';

// export const sendEmailForPasswordChange = async (to: string, html: string) => {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com.',
//     port: 587,
//     secure: config.NODE_ENV === 'production',
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: 'farhan.adnan1952@gmail.com',
//       pass: 'odogzppnxqlrgqjr',
//     },
//   });

//   await transporter.sendMail({
//     from: 'farhan.adnan1952@gmail.com', // sender address
//     to, // list of receivers
//     subject: 'Reset your password within 10 mins!', // Subject line
//     text: '', // plain text body
//     html, // html body
//   });
// };
