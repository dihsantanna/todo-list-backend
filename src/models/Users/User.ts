import jwt from 'jsonwebtoken';
import { IAuthUser, ILoggedInUser, IUserInfo } from '../../interfaces/Users';
import userSchema from './Schemas';
import connection from '../connection';

const secret = process.env.JWT_SECRET as string;

const Model = connection.model<IUserInfo>('User', userSchema);

export default class User {
  constructor() {
    this.create = this.create.bind(this);
  }
  
  async create({ name, password, email }: IAuthUser) {
    const newUser = await Model.create({ name, password, email });
    const id = newUser._id;
    const payload: ILoggedInUser = { _id: id, name, email };
    return jwt.sign(payload, secret, { expiresIn: '24h' });
  }

  async getAll() {
    return await Model.find();
  }

  async getById(id: string) {
    return await Model.findById({_id: id});
  }

  async delete(id: string) {
    await Model.deleteOne({_id: id})
  }
}