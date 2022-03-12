import IUser from './IUser';

interface ILoggedInUser extends IUser {
  _id: string;
}

export default ILoggedInUser;