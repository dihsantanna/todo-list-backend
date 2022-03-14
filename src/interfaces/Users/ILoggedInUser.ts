import { Schema } from 'mongoose';
import IUser from './IUser';

interface ILoggedInUser extends IUser {
  _id: Schema.Types.ObjectId;
}

export default ILoggedInUser;