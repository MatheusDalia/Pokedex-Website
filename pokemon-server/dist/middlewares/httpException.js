"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class HttpException extends Error {
  constructor(status, message) {
    super(message);
    this.status = void 0;
    this.message = void 0;
    this.status = status;
    this.message = message;
  }

}

var _default = HttpException;
exports.default = _default;