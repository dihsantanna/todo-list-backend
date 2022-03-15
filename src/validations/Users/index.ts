import { NextFunction, Request, Response } from 'express';
import UserSchema from './UserSchema';
import code from '../../environments/Status_Code';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    await UserSchema.validateAsync(body);
    next()
  } catch (error: any) {
    res.status(code.BAD_REQUEST).json({message: error.message});
  }
}