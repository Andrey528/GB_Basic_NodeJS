const joi = require('joi');

const userSchema = joi.object({
  firstName: joi.string().min(1).required(),
  lastName: joi.string().min(1).required(),
  age: joi.number().min(0).max(150).required(),
  city: joi.string().min(1),
});

const idSchema = joi.object({
  id: joi.number().required(),
});

module.exports = { userSchema, idSchema };
