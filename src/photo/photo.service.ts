/* eslint-disable prettier/prettier */

import { Inject, Injectable } from '@nestjs/common';
import { Photo } from 'src/entity/Photo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
    private connection: Connection,
  ) {}
  async findall(): Promise<any> {
    return await this.photoRepository.find();
  }
  async insert(photo: Photo) {
    return await this.photoRepository.save(photo);
  }
  async update(id: number, photo: Photo) {
    return await getConnection()
      .createQueryBuilder()
      .update(Photo)
      .set({ name: photo.name, description: photo.description })
      .where('id=:id', { id: id })
      .execute();
  }
  async getById(id: number) {
    return await this.connection
      .getRepository(Photo)
      .createQueryBuilder('Photo')
      .select()
      .where('id=:id', { id: id })
      .execute();
  }
}
