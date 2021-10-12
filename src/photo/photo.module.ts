/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from 'src/entity/Photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  exports: [TypeOrmModule],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
