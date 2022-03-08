"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const requestHandler = (req, res) => {
  res.status(res.locals.status).json({
    data: res.locals.data,
    message: res.locals.message
  });
};

var _default = requestHandler;
exports.default = _default;