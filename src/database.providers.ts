/* eslint-disable prettier/prettier */

import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Xisys88@',
        database: 'postgres',
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
      }),
  },
];
