import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPokemon1646677017617 implements MigrationInterface {
    name = 'AddPokemon1646677017617'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "pokemon" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "pokemon_number" integer NOT NULL, "img_name" text NOT NULL, "generation" integer NOT NULL, "evolution_stage" text NOT NULL, "evolved" integer NOT NULL, "family_id" integer NOT NULL, "cross_gen" integer NOT NULL, "type1" text NOT NULL, "type2" text NOT NULL, "weather1" text NOT NULL, "weather2" text NOT NULL, "stat_total" integer NOT NULL, "atk" integer NOT NULL, "def" integer NOT NULL, "sta" integer NOT NULL, "legendary" integer NOT NULL, "acquirable" integer NOT NULL, "spawns" integer NOT NULL, "regional" integer NOT NULL, "raidable" integer NOT NULL, "hatchable" integer NOT NULL, "shiny" integer NOT NULL, "nest" integer NOT NULL, "news" integer NOT NULL, "not_gettable" integer NOT NULL, "future_evolve" integer NOT NULL, "full_cp_40" integer NOT NULL, "full_cp_39" integer NOT NULL, CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "pokemon"');
    }
}
