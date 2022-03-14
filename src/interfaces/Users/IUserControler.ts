import { Request, Response } from 'express';
import { IAuthUser } from '../../interfaces/Users';
import IStatusAndResult from '../IStatusAndResult';

interface IUserController {
  create(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
}

export default IUserController;