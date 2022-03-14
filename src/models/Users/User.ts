import jwt from 'jsonwebtoken';
import { IAuthUser, ILoggedInUser, IUserInfo, IUserModel } from '../../interfaces/Users';
import userSchema from './Schemas';
import connection from '../connection';

const secret = process.env.JWT_SECRET as string;

const Model = connection.model<IUserInfo>('User', userSchema);

export default class User implements IUserModel { 
  
  public async create({ name, password, email }: IAuthUser) {
    const newUser = await Model.create({ name, password, email });
    const id = newUser._id;
    const payload: ILoggedInUser = { _id: id, name, email };
    return jwt.sign(payload, secret, { expiresIn: '7d' });
  }

  public async getAll() {
    return await Model.find({}, {_id: 1, name: 1, email: 1, password: 0});
  }

  public async getById(id: string) {
    return await Model.findById(id, {_id: 1, name: 1, email: 1, password: 0});
  }

  public async delete(id: string) {
    await Model.deleteOne({_id: id})
  }

  public async update(id: string, {name, password, email}: IAuthUser) {
    await Model.updateOne({_id: id}, {name, password, email});
  }
}