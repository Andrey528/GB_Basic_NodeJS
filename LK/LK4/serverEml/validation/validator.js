function checkParams(schema) {
  return (req, res, next) => {
    const validateResult = schema.validate(req.params);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error.details);
    }
    next();
  };
}

function checkBody(schema) {
  return (req, res, next) => {
    const validateResult = schema.validate(req.body);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error.details);
    }
    next();
  };
}

module.exports = { checkParams, checkBody };
