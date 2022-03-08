"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _repositories = require("../repositories");

var _DTOs = require("../DTOs");

class PokemonController {
  async create(req, res, next) {
    try {
      const {
        name,
        pokemon_number,
        img_name,
        generation,
        evolution_stage,
        evolved,
        family_id,
        cross_gen,
        type1,
        type2,
        weather1,
        weather2,
        stat_total,
        atk,
        def,
        sta,
        legendary,
        acquirable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        news,
        not_gettable,
        future_evolve,
        full_cp_40,
        full_cp_39
      } = req.body;
      const pokemonRepository = (0, _typeorm.getCustomRepository)(_repositories.PokemonRepository);
      const pokemonData = {
        name,
        pokemon_number,
        img_name,
        generation,
        evolution_stage,
        evolved,
        family_id,
        cross_gen,
        type1,
        type2,
        weather1,
        weather2,
        stat_total,
        atk,
        def,
        sta,
        legendary,
        acquirable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        news,
        not_gettable,
        future_evolve,
        full_cp_40,
        full_cp_39
      };

      const {
        error
      } = _DTOs.Pokemon.validate(pokemonData);

      if (error) {
        return next({
          status: 400,
          message: error.details
        });
      }

      const user = await pokemonRepository.save(pokemonData);
      res.locals = {
        status: 201,
        message: 'User created',
        data: user
      };
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req, res, next) {
    try {
      const {
        userId
      } = req.params;
      const userRepository = (0, _typeorm.getCustomRepository)(_repositories.PokemonRepository);
      const user = await userRepository.findById(userId);

      if (!user) {
        return next({
          status: 404,
          message: 'User not found'
        });
      }

      if (user === 'ERROR') {
        return next({
          status: 400,
          message: 'Incorrect parameters'
        });
      }

      res.locals = {
        status: 200,
        data: user
      };
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const {
        userId
      } = req.params;
      const pokemonRepository = (0, _typeorm.getCustomRepository)(_repositories.PokemonRepository);
      await pokemonRepository.delete(userId);
      res.locals = {
        status: 200,
        message: 'User deleted.'
      };
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async patch(req, res, next) {
    try {
      const {
        userId
      } = req.params;
      const user = req.body;

      const {
        error
      } = _DTOs.UpdatePokemon.validate(user);

      if (error) {
        return next({
          status: 400,
          message: error.details
        });
      }

      const userRepository = (0, _typeorm.getCustomRepository)(_repositories.PokemonRepository);
      await userRepository.patch(userId, user);
      res.locals = {
        status: 200,
        message: 'User patched.'
      };
      return next();
    } catch (error) {
      return next(error);
    }
  }

}

var _default = new PokemonController();

exports.default = _default;