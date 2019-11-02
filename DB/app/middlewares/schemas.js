const { validationResult } = require('express-validator');

const { badRequest } = require('../errors');

exports.validateSchemas = (req, res, next) => {
  const errorsMessages = validationResult(req).array();
  if (errorsMessages.length !== 0) return next(badRequest(errorsMessages.map(error => error.msg)));
  return next();
};
