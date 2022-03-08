"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const userResponse = {
  create: {
    201: {
      description: 'User created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user'
          }
        }
      }
    },
    400: {
      description: 'Incorrect parameters'
    },
    500: {
      description: 'Internal Server Error'
    }
  },
  get: {
    200: {
      description: 'User information',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user'
          }
        }
      }
    },
    400: {
      description: 'Incorrect parameters'
    },
    404: {
      description: 'User not found'
    },
    500: {
      description: 'Internal Server Error'
    }
  },
  delete: {
    200: {
      description: 'Delete user',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user'
          }
        }
      }
    },
    400: {
      description: 'Incorrect parameters'
    },
    404: {
      description: 'User not found'
    },
    500: {
      description: 'Internal Server Error'
    }
  },
  update: {
    201: {
      description: 'User updated',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user'
          }
        }
      }
    },
    400: {
      description: 'Incorrect parameters'
    },
    401: {
      description: 'Unauthorized action'
    },
    404: {
      description: 'User not found'
    },
    500: {
      description: 'Internal Server Error'
    }
  }
};
var _default = userResponse;
exports.default = _default;