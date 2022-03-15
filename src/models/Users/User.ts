import jwt from 'jsonwebtoken';
import { IAuthUser, ILoggedInUser, IUserInfo, IUserModel } from '../../interfaces/Users';
import userSchema from './Schemas';
import connection from '../connection';

const secret = process.env.JWT_SECRET as string;

const Model = connection.model<IUserInfo>('User', userSchema);

export default class User implements IUserModel { 
  
  async create({ name, password, email }: IAuthUser) {
    const newUser = await Model.create({ name, password, email });
    const id = newUser._id;
    const payload: ILoggedInUser = { _id: id, name, email };
    return jwt.sign(payload, secret, { expiresIn: '7d' });
  }

  async getAll() {
    return await Model.find().select(['_id', 'name', 'email']);
  }

  async getById(id: string) {
    return await Model.findById(id).select(['_id', 'name', 'email']);
  }

  async delete(id: string) {
    await Model.deleteOne({_id: id})
  }

  async update(id: string, {name, password, email}: IAuthUser) {
    await Model.updateOne({ _id: id }, { name, password, email });
  }
}