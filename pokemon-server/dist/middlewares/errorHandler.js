"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const errorHandler = (error, req, res, next) => {
  res.locals.status = error.status;
  res.locals.message = error.message;
  return next();
};

var _default = errorHandler;
exports.default = _default;