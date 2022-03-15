const pokemonResponse = {
  create: {
    201: {
      description: 'Pokemon created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/pokemon',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  get: {
    200: {
      description: 'Pokemon information',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/pokemon',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    404: {
      description: 'Pokemon not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },

  delete: {
    200: {
      description: 'Delete pokemon',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/pokemon',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    404: {
      description: 'Pokemon not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },

  update: {
    201: {
      description: 'Pokemon updated',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/pokemon',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    401: {
      description: 'Unauthorized action',
    },
    404: {
      description: 'Pokemon not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
};

export default pokemonResponse;
