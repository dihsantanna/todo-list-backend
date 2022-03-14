import { Router } from 'express';
import userController from '../controllers/Users'

const route = Router();

route.post(
  '/',
  userController.prototype.create,
);

route.get(
  '/',
  userController.prototype.getAll,
);

route.get(
  '/:id',
  userController.prototype.getById,
);

route.delete(
  '/:id',
  userController.prototype.delete,
);

route.put(
  '/:id',
  userController.prototype.getById,
);

export default route;