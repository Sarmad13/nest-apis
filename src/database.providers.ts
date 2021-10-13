/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class DbConfig {
  public static databaseProviders(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Xisys88@',
      database: 'postgres',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: ['query', 'error'],
    };
  }
}
// export const databaseProviders = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'Xisys88@',
//   database: 'postgres',
//   entities: ['dist/**/*.entity.js'],
//   synchronize: true,
//   logging: ['query', 'error'],
// };
