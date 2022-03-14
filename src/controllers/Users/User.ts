import { Request, Response } from 'express';
import IUserController from '../../interfaces/Users/IUserControler';
import userService from '../../services/Users';

export default class User implements IUserController {
  async create(req: Request, res: Response) {
    const { body } = req;
    const { code, result } = await userService.prototype.create(body);
    res.status(code).json(result);
  };

  async getAll(_req: Request, res: Response) {
    const { code, result } = await userService.prototype.getAll();
    res.status(code).json(result);
  };

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const { code, result } = await userService.prototype.getById(id);
    res.status(code).json(result);
  };

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { code, result } = await userService.prototype.delete(id);
    res.status(code).json(result);
  };

  async update(req: Request, res: Response) {
    const { body , params: { id } } = req;
    const { code, result } = await userService.prototype.update(id, body);
    res.status(code).json(result);
  };
}