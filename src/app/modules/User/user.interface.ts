/* eslint-disable no-unused-vars */

import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface IUser {
  name: string;
  email: string;
  role: string;
  password: string;
  photo?: string;
  isVerified?: boolean; // Optional: To track if email is verified
  verifyCode?: string;
  isDeleted: boolean;
}

export interface UserModel extends Model<IUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<IUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  // isJWTIssuedBeforePasswordChanged(
  //   passwordChangedTimestamp: Date,
  //   jwtIssuedTimestamp: number,
  // ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;




// /* eslint-disable no-unused-vars */

// import { Model } from 'mongoose';
// import { USER_ROLE } from './user.constant';

// export interface TUser {
//   id: any;
//   _id: any;
//   name?: string;
//   email: string;
//   password: string;
//   role?: string;
//   isDeleted?: boolean;
// }

// export interface UserModel extends Model<TUser> {
//   //instance methods for checking if the user exist
//   isUserExistsByEmail(email: string): Promise<TUser>;
//   //instance methods for checking if passwords are matched
//   isPasswordMatched(
//     plainTextPassword: string,
//     hashedPassword: string,
//   ): Promise<boolean>;
//   // isJWTIssuedBeforePasswordChanged(
//   //   passwordChangedTimestamp: Date,
//   //   jwtIssuedTimestamp: number,
//   // ): boolean;
// }

// export type TUserRole = keyof typeof USER_ROLE;
