import { pokemonResponse } from '../responses';

const pokemonPath = {
  '/pokemon': {
    post: {
      tags: ['Pokemon'],
      summary: 'Create a pokemon',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/pokemon',
            },
            example: {
              name: 'Seu Madruga',
              pokemon_number: 13,
              img_name: 'ghgh',
              generation: 13,
              evolution_stage: '1',
              evolved: 13,
              family_id: 1,
              cross_gen: 13,
              type1: 'o mais brabo',
              type2: 'o mais brabo',
              weather1: 'calor do Recife',
              weather2: 'frio de Gravatá',
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
              full_cp_39: 13,
            },
          },
        },
      },

      responses: pokemonResponse.create,
    },
  },
  '/pokemon/{id}': {
    get: {
      tags: ['Pokemon'],
      summary: 'Get pokemon information',
      description: "Get pokemon information from it's id",
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'Pokemon id',
        required: true,
        schema: {
          type: 'string',
        },
      }],
      responses: pokemonResponse.get,
    },
    delete: {
      tags: ['Pokemon'],
      summary: 'Delete pokemon',
      description: "Delete pokemon from it's id",
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'Pokemon id',
        required: true,
        schema: {
          type: 'string',
        },
      }],
      responses: pokemonResponse.delete,
    },
    patch: {
      tags: ['Pokemon'],
      summary: 'Update pokemon information',
      description: "Update pokemon information from it's id",
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'Pokemon id',
        required: true,
        schema: {
          type: 'string',
        },
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/pokemon',
            },
            example: {
              name: 'Seu Madruga',
              pokemon_number: 13,
              img_name: 'ghgh',
              generation: 13,
              evolution_stage: '1',
              evolved: 13,
              family_id: 1,
              cross_gen: 13,
              type1: 'o mais brabo',
              type2: 'o mais brabo',
              weather1: 'calor do Recife',
              weather2: 'frio de Gravatá',
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
              full_cp_39: 13,
            },
          },
        },
      },
      responses: pokemonResponse.update,
    },
  },

};

export default pokemonPath;
