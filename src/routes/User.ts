import { Router } from 'express';
import userController from '../controllers/Users'
import userValidate from '../validations/Users';
import tokenValidate from '../validations/Token';
import rescue from 'express-rescue';

const route = Router();

route.post(
  '/',
  userValidate,
  rescue(userController.prototype.create),
);

route.get(
  '/',
  tokenValidate,
  rescue(userController.prototype.getAll),
);

route.get(
  '/:id',
  tokenValidate,
  rescue(userController.prototype.getById),
);

route.delete(
  '/:id',
  tokenValidate,
  rescue(userController.prototype.delete),
);

route.put(
  '/:id',
  tokenValidate,
  userValidate,
  rescue(userController.prototype.update),
);

export default route;