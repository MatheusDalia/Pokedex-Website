import Joi from 'joi';

export const Pokemon = Joi.object({
  name: Joi.string().required(),
  pokemon_number: Joi.number().required(),
  img_name: Joi.string().required(),
  generation: Joi.number().required(),
  evolution_stage: Joi.string().required(),
  evolved: Joi.number().required(),
  family_id: Joi.number().required(),
  cross_gen: Joi.number().required(),
  type1: Joi.string().required(),
  type2: Joi.string().required(),
  weather1: Joi.string().required(),
  weather2: Joi.string().required(),
  stat_total: Joi.number().required(),
  atk: Joi.number().required(),
  def: Joi.number().required(),
  sta: Joi.number().required(),
  legendary: Joi.number().required(),
  acquirable: Joi.number().required(),
  spawns: Joi.number().required(),
  regional: Joi.number().required(),
  raidable: Joi.number().required(),
  hatchable: Joi.number().required(),
  shiny: Joi.number().required(),
  nest: Joi.number().required(),
  news: Joi.number().required(),
  not_gettable: Joi.number().required(),
  future_evolve: Joi.number().required(),
  full_cp_40: Joi.number().required(),
  full_cp_39: Joi.number().required(),
});

export const UpdatePokemon = Joi.object({
  name: Joi.string().required(),
  pokemon_number: Joi.number().required(),
  img_name: Joi.string().required(),
  generation: Joi.number().required(),
  evolution_stage: Joi.string().required(),
  evolved: Joi.number().required(),
  family_id: Joi.number().required(),
  cross_gen: Joi.number().required(),
  type1: Joi.string().required(),
  type2: Joi.string().required(),
  weather1: Joi.string().required(),
  weather2: Joi.string().required(),
  stat_total: Joi.number().required(),
  atk: Joi.number().required(),
  def: Joi.number().required(),
  sta: Joi.number().required(),
  legendary: Joi.number().required(),
  acquirable: Joi.number().required(),
  spawns: Joi.number().required(),
  regional: Joi.number().required(),
  raidable: Joi.number().required(),
  hatchable: Joi.number().required(),
  shiny: Joi.number().required(),
  nest: Joi.number().required(),
  news: Joi.number().required(),
  not_gettable: Joi.number().required(),
  future_evolve: Joi.number().required(),
  full_cp_40: Joi.number().required(),
  full_cp_39: Joi.number().required(),
});

export type PokemonType = {
  name?: string;
  pokemon_number?: number;
  img_name?: string;
  generation?: number;
  evolution_stage?: string;
  evolved?: number;
  family_id?: number;
  cross_gen?: number;
  type1?: string;
  type2?: string;
  weather1?: string;
  weather2?: string;
  stat_total?: number;
  atk?: number;
  def?: number;
  sta?: number;
  legendary?: number;
  acquirable?: number;
  spawns?: number;
  regional?: number;
  raidable?: number;
  hatchable?: number;
  shiny?: number;
  nest?: number;
  news?: number;
  not_gettable?: number;
  future_evolve?: number;
  full_cp_40?: number;
  full_cp_39?: number;
};
