import {
  Request, Response, NextFunction,
} from 'express';
import { getCustomRepository } from 'typeorm';
import { PokemonRepository } from '../repositories';
import { Pokemon, UpdatePokemon } from '../DTOs';

class PokemonController {
  async createAll(req: Request, res: Response, next: NextFunction) {
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
        full_cp_39,
      } = req.body;

      const pokemonRepository = getCustomRepository(PokemonRepository);

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
        full_cp_39,
      };

      const { error } = Pokemon.validate(pokemonData);

      if (error) {
        return next({
          status: 400,
          message: error.details,
        });
      }

      const user = await pokemonRepository.save(pokemonData);

      res.locals = {
        status: 201,
        message: 'Pokedex created',
        data: user,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
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
        full_cp_39,
      } = req.body;

      const pokemonRepository = getCustomRepository(PokemonRepository);

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
        full_cp_39,
      };

      const { error } = Pokemon.validate(pokemonData);

      if (error) {
        return next({
          status: 400,
          message: error.details,
        });
      }

      const user = await pokemonRepository.save(pokemonData);

      res.locals = {
        status: 201,
        message: 'Pokemon created',
        data: user,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const userRepository = getCustomRepository(PokemonRepository);
      const user = await userRepository.findById(userId);

      if (!user) {
        return next({
          status: 404,
          message: 'User not found',
        });
      }

      if (user === 'ERROR') {
        return next({
          status: 400,
          message: 'Incorrect parameters',
        });
      }

      res.locals = {
        status: 200,
        data: user,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const pokemonRepository = getCustomRepository(PokemonRepository);
      await pokemonRepository.delete(userId);

      res.locals = {
        status: 200,
        message: 'User deleted.',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async patch(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const user = req.body;
      const { error } = UpdatePokemon.validate(user);

      if (error) {
        return next({
          status: 400,
          message: error.details,
        });
      }

      const userRepository = getCustomRepository(PokemonRepository);
      await userRepository.patch(userId, user);

      res.locals = {
        status: 200,
        message: 'User patched.',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new PokemonController();
