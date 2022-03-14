import { IAuthUser } from '../../interfaces/Users';
import IStatusAndResult from '../IStatusAndResult';

interface IUserService {
  create(user: IAuthUser): Promise<IStatusAndResult>;
  getAll(): Promise<IStatusAndResult>;
  getById(id: string): Promise<IStatusAndResult>;
  delete(id: string): Promise<IStatusAndResult>;
  update(id: string, user: IAuthUser): Promise<IStatusAndResult>;
}

export default IUserService;