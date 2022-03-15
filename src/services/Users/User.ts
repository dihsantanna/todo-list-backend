import * as msgs from '../../environments/MSGS';
import { IAuthUser } from '../../interfaces/Users';
import userModel from '../../models/Users';
import code from '../../environments/Status_Code';
import IUserService from '../../interfaces/Users/IUserService';

export default class User implements IUserService {
  async create(user: IAuthUser) {
    return {code: code.CREATED, result: { token: await userModel.prototype.create(user) }};
  }

  async getAll() {
    return {code: code.OK, result: await userModel.prototype.getAll()};
  }

  async getById(id: string) {
    const response =  await userModel.prototype.getById(id);
    if (!response) return { code: code.NOT_FOUND, result: msgs.USER_NOT_FOUND};
    return {code: code.ACCEPTED, result: response};
  }

  async delete(id: string) {
    const userExists = await userModel.prototype.getById(id);
    if (!userExists) return {code: code.NOT_FOUND, result: msgs.USER_NOT_EXIST};
    await userModel.prototype.delete(id);
    return {code: code.OK, result: msgs.USER_DELETED}
  }

  async update(id: string, user: IAuthUser) {
    const userExists = await userModel.prototype.getById(id);
    if (!userExists) return {code: code.NOT_FOUND, result: msgs.USER_NOT_EXIST};
    await userModel.prototype.update(id, user);
    return {code: code.OK, result: msgs.USER_UPDATED};
  }
}