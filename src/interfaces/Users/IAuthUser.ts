import IUser from './IUser';

interface IAuthUser extends IUser {
  password: string;
}

export default IAuthUser;