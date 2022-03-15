import Joi from 'joi';

export default Joi.object(
  {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string()
      .pattern(new RegExp('[a-z]+'))
      .pattern(new RegExp('[A-Z]+'))
      .pattern(new RegExp('[0-9]+'))
      .min(8).max(16).required(),
  }
)