"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _responses = require("../responses");

const pokemonPath = {
  '/user': {
    post: {
      tags: ['User'],
      summary: 'Create a pokemon',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/user'
            },
            example: {
              name: 'Pikachu',
              pokemon_number: 13,
              img_name: 'ghgh',
              generation: 13,
              evolution_stage: 'o mais brabo',
              evolved: 13,
              family_id: 1,
              cross_gen: 13,
              type1: 'o mais brabo',
              type2: 'o mais brabo',
              weather1: 'o mais brabo',
              weather2: 'o mais brabo',
              stat_total: 13,
              atk: 13,
              def: 13,
              sta: 43,
              legendary: 13,
              acquirable: 13,
              spawns: 13,
              regional: 13,
              raidable: 13,
              hatchable: 13,
              shiny: 13,
              nest: 13,
              news: 13,
              not_gettable: 13,
              future_evolve: 13,
              full_cp_40: 13,
              full_cp_39: 13
            }
          }
        }
      },
      responses: _responses.userResponse.create
    }
  },
  '/user/{id}': {
    get: {
      tags: ['User'],
      summary: 'Get user information',
      description: "Get user information from it's id",
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'User id',
        required: true,
        schema: {
          type: 'string'
        }
      }],
      responses: _responses.userResponse.get
    },
    delete: {
      tags: ['User'],
      summary: 'Delete user',
      description: "Delete user from it's id",
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'User id',
        required: true,
        schema: {
          type: 'string'
        }
      }],
      responses: _responses.userResponse.delete
    },
    patch: {
      tags: ['User'],
      summary: 'Update user information',
      description: "Update user information from it's id",
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'User id',
        required: true,
        schema: {
          type: 'string'
        }
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/user'
            },
            example: {
              name: 'Pikachu',
              pokemon_number: 13,
              img_name: 'ghgh',
              generation: 13,
              evolution_stage: 'o mais brabo',
              evolved: 13,
              family_id: 1,
              cross_gen: 13,
              type1: 'o mais brabo',
              type2: 'o mais brabo',
              weather1: 'o mais brabo',
              weather2: 'o mais brabo',
              stat_total: 13,
              atk: 13,
              def: 13,
              sta: 13,
              legendary: 13,
              acquirable: 13,
              spawns: 13,
              regional: 13,
              raidable: 13,
              hatchable: 13,
              shiny: 13,
              nest: 13,
              news: 43,
              not_gettable: 13,
              future_evolve: 13,
              full_cp_40: 13,
              full_cp_39: 13
            }
          }
        }
      },
      responses: _responses.userResponse.update
    }
  }
};
var _default = pokemonPath;
exports.default = _default;