import { IUserInfo } from '../../../interfaces/Users';
import connection from '../../connection';

const { Schema } = connection;

const userSchema = new Schema<IUserInfo>({
  name: String,
  email: String,
  password: String,
});

export default userSchema;