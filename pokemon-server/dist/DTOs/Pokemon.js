"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdatePokemon = exports.Pokemon = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pokemon = _joi.default.object({
  name: _joi.default.string().required(),
  pokemon_number: _joi.default.number().required(),
  img_name: _joi.default.string().required(),
  generation: _joi.default.number().required(),
  evolution_stage: _joi.default.string().required(),
  evolved: _joi.default.number().required(),
  family_id: _joi.default.number().required(),
  cross_gen: _joi.default.number().required(),
  type1: _joi.default.string().required(),
  type2: _joi.default.string().required(),
  weather1: _joi.default.string().required(),
  weather2: _joi.default.string().required(),
  stat_total: _joi.default.number().required(),
  atk: _joi.default.number().required(),
  def: _joi.default.number().required(),
  sta: _joi.default.number().required(),
  legendary: _joi.default.number().required(),
  acquirable: _joi.default.number().required(),
  spawns: _joi.default.number().required(),
  regional: _joi.default.number().required(),
  raidable: _joi.default.number().required(),
  hatchable: _joi.default.number().required(),
  shiny: _joi.default.number().required(),
  nest: _joi.default.number().required(),
  news: _joi.default.number().required(),
  not_gettable: _joi.default.number().required(),
  future_evolve: _joi.default.number().required(),
  full_cp_40: _joi.default.number().required(),
  full_cp_39: _joi.default.number().required()
});

exports.Pokemon = Pokemon;

const UpdatePokemon = _joi.default.object({
  name: _joi.default.string().required(),
  pokemon_number: _joi.default.number().required(),
  img_name: _joi.default.string().required(),
  generation: _joi.default.number().required(),
  evolution_stage: _joi.default.string().required(),
  evolved: _joi.default.number().required(),
  family_id: _joi.default.number().required(),
  cross_gen: _joi.default.number().required(),
  type1: _joi.default.string().required(),
  type2: _joi.default.string().required(),
  weather1: _joi.default.string().required(),
  weather2: _joi.default.string().required(),
  stat_total: _joi.default.number().required(),
  atk: _joi.default.number().required(),
  def: _joi.default.number().required(),
  sta: _joi.default.number().required(),
  legendary: _joi.default.number().required(),
  acquirable: _joi.default.number().required(),
  spawns: _joi.default.number().required(),
  regional: _joi.default.number().required(),
  raidable: _joi.default.number().required(),
  hatchable: _joi.default.number().required(),
  shiny: _joi.default.number().required(),
  nest: _joi.default.number().required(),
  news: _joi.default.number().required(),
  not_gettable: _joi.default.number().required(),
  future_evolve: _joi.default.number().required(),
  full_cp_40: _joi.default.number().required(),
  full_cp_39: _joi.default.number().required()
});

exports.UpdatePokemon = UpdatePokemon;