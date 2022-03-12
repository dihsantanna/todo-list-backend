import IAuthUser from './IAuthUser';

interface IUserInfo extends IAuthUser {
  _id: string;
}

export default IUserInfo;