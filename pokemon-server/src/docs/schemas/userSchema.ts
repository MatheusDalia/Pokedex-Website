const userSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      format: 'password',
    },
    isMember: {
      type: 'boolean',
    },
  },
  required: ['name', 'email', 'password', 'isMember'],
};

export default userSchema;
