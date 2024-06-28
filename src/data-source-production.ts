import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Profile } from './profile/entities/profile.entity';
import { LevelEntity } from './level/entities/level.entity';
import { Score } from './score/entities/score.entity';
import { Game } from './game/entities/game.entity';
import { Link } from './location/entities/link.entity';
import { Room } from './room/entities/room.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cpl25dud3nmc73ddtv40-a',
  database: 'guessby',
  port: 5432,
  username: 'guessby_user',
  password: 'xYC0KD0o5TWznzqsiBIhAzzKLEmPrDmh',
  synchronize: false,
  entities: [User, Profile, Room, Link, Game, Score, Location, LevelEntity],
  migrations: ['src/migrations/*{.ts,.js}'],
});

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default dataSource;
