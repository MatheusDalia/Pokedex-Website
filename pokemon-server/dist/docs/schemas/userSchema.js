"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const userSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    password: {
      type: 'string',
      format: 'password'
    },
    isMember: {
      type: 'boolean'
    }
  },
  required: ['name', 'email', 'password', 'isMember']
};
var _default = userSchema;
exports.default = _default;