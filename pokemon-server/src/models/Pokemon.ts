import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

@Entity()
export default class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column()
  pokemon_number: number;

  @Column('text')
  img_name: string;

  @Column()
  generation: Number;

  @Column('text')
  evolution_stage: string;

  @Column()
  evolved: Number;

  @Column()
  family_id: Number;

  @Column()
  cross_gen: Number;

  @Column('text')
  type1: string;

  @Column('text')
  type2: string;

  @Column('text')
  weather1: string;

  @Column('text')
  weather2: string;

  @Column()
  stat_total: Number;

  @Column()
  atk: Number;

  @Column()
  def: Number;

  @Column()
  sta: Number;

  @Column()
  legendary: Number;

  @Column()
  acquirable: Number;

  @Column()
  spawns: Number;

  @Column()
  regional: Number;

  @Column()
  raidable: Number;

  @Column()
  hatchable: Number;

  @Column()
  shiny: Number;

  @Column()
  nest: Number;

  @Column()
  news: Number;

  @Column()
  not_gettable: Number;

  @Column()
  future_evolve: Number;

  @Column()
  full_cp_40: Number;

  @Column()
  full_cp_39: Number;
}
