import { IAuthUser, ILoggedInUser } from '../../interfaces/Users';

interface IUserModel {
  create(user: IAuthUser): Promise<string>;
  getAll(): Promise<ILoggedInUser[]>;
  getById(id: string): Promise<ILoggedInUser | null>;
  delete(id: string): Promise<void>;
  update(id: string, user: IAuthUser): Promise<void>;
}

export default IUserModel;