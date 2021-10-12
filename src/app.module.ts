/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Products/Products.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoService } from './photo/photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Xisys88@',
      database: 'postgres',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    ProductsModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  // providers: [AppService, ...databaseProviders],
  // exports: [...databaseProviders],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
