import { EntityRepository, Repository } from 'typeorm';
import { Pokemon } from '../models';
import { UpdatePokemon, PokemonType } from '../DTOs/Pokemon';

@EntityRepository(Pokemon)
export default class UserRepository extends Repository<Pokemon> {
  public async findById(id: string): Promise<Pokemon | false | string> {
    try {
      const user = await this.findOne(id);

      if (!user) {
        return false;
      }

      return user;
    } catch (error) {
      return error.severity || error;
    }
  }

  public async patch(
    id: string,
    user: PokemonType,
  ): Promise<Pokemon | string> {
    try {
      const auxUser = { ...user };
      await UpdatePokemon.validateAsync(auxUser);

      await this.update(id, auxUser);
      const updatedUser = await this.findOne(id);

      return updatedUser;
    } catch (error) {
      return error;
    }
  }
}
