import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as msgs from '../../environments/MSGS'
import ITokenSchema from '../../interfaces/ITokenSchema';
import { ILoggedInUser } from '../../interfaces/Users';
import userModel from '../../models/Users'
dotenv.config();

const secret = process.env.JWT_SECRET as string;

export default class TokenSchema implements ITokenSchema {
  required(token: string) {
    if (!token) throw new Error(msgs.TOKEN_IS_REQUIRED.message);
  }
  async validate(token: string) {
    this.required(token);
    if (!jwt.verify(token, secret)) throw new Error(msgs.TOKEN_INVALID.message);
    const { _id }= jwt.verify(token, secret) as ILoggedInUser;
    if (!await userModel.prototype.getById(_id)) throw new Error(msgs.USER_NOT_EXIST.message);
  }
};
