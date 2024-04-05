const joi = require('joi');

const articleSchema = joi.object({
  title: joi.string().min(5).required(),
  content: joi.string().min(10).required(),
});

const idSchema = joi.object({
  id: joi.number().required(),
});

module.exports = { articleSchema, idSchema };
