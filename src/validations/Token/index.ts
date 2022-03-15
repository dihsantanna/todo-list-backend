import {Request, Response, NextFunction} from 'express';
import TokenSchema from './TokenSchema';
import code from '../../environments/Status_Code';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string;
  try {
    await TokenSchema.prototype.validate(token);
    next()
  } catch (error: any) {
    res.status(code.UNAUTHORIZED).json({message: error.message})
  }
}