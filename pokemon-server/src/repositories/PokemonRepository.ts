import { EntityRepository, Repository, getConnection } from 'typeorm';
import { Pokemon } from '../models';
import { UpdatePokemon, PokemonType } from '../DTOs/Pokemon';
import pokemonjson from '../../pokemonjson';

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

  public async createAll() {
    const count = await this.count();
    if (count !== 0) return;
    console.log('Hello');
    await this.createQueryBuilder().insert().values(pokemonjson).execute();
    const response = await this.createQueryBuilder('Pokemons').insert().values([...pokemonjson]);
    console.log(response);
    return response;
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
