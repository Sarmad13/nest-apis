/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Photo } from 'src/entity/Photo.entity';
import { PhotoMetadata } from 'src/entity/PhotoMetadata.entity';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  getPhotos() {
    return this.photoService.findall();
  }
  // TODO: Move to separate service/module/controller
  @Get('photoMetaData')
  getPhotoMetaData() {
    return this.photoService.findallphotoMetaData();
  }
  @Post('savePhotoMetaData')
  savePhotoMetaData() {
    const obj = new Photo();
    obj.description = 'asdasd';
    obj.name = 'asdasdsa';
    obj.views = 1;
    obj.filename = 'dasdasd';
    obj.isPublished = true;
    const metadata = new PhotoMetadata();
    metadata.comment = 'asdsad';
    metadata.compressed = true;
    metadata.height = 12;
    metadata.orientation = 'sadsadsa';
    metadata.width = 123;
    obj.metadata = metadata;
    return this.photoService.savePhotoMetaData(obj);
  }

  @Get('photorelation')
  getPhotorelation() {
    return this.photoService.findphotoMetaData();
  }
  // Till here

  @Post('insert')
  savePhoto(@Body() photo: Photo) {
    return this.photoService.insert(photo);
  }
  @Patch(':id')
  updatePhoto(@Param('id') id: number, @Body() photo: Photo) {
    return this.photoService.update(id, photo);
  }
  @Get('getById/:id')
  getById(@Param('id') id: number) {
    return this.photoService.getById(id);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    this.photoService.remove(id);
  }
}
