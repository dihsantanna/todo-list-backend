import { Schema } from 'mongoose';
import IAuthUser from './IAuthUser';

interface IUserInfo extends IAuthUser {
  _id: Schema.Types.ObjectId;
}

export default IUserInfo;