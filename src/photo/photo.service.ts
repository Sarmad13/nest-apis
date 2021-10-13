/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { Photo } from 'src/entity/Photo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { Connection } from 'typeorm';
import { PhotoMetadata } from 'src/entity/PhotoMetadata.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
    private connection: Connection,
    @InjectRepository(PhotoMetadata)
    private photoMetadataRepository: Repository<PhotoMetadata>,
  ) {}
  // TODO: Move to separate service/module/controller

  async findallphotoMetaData(): Promise<any> {
    return await this.photoMetadataRepository.query(
      'select * from photo_metadata',
    );
  }
  async findphotoMetaData(): Promise<any> {
    // return await this.photoRepository.find({ relations: ['metadata'] });
    return await this.connection
      .createQueryBuilder(Photo, 'photo')
      .leftJoinAndSelect('photo.metadata', 'metadata')
      .getMany();
  }
  async savePhotoMetaData(photo: Photo) {
    return await this.photoRepository.save(photo);
  }
  // Till here
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
  async remove(id: number) {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Photo)
      .where('id:id', { id: id })
      .execute();
  }
}
