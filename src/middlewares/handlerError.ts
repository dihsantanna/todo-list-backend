import {Request, Response, NextFunction} from 'express';
import code from '../environments/Status_Code';

export default async (err: any, _req: Request, res: Response, next: NextFunction) => {
  res.status(code.INTERNAL_ERROR).json({message: err.message});
  next();
}