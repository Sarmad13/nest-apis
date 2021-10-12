/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Photo } from 'src/entity/Photo.entity';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  getPhotos() {
    return this.photoService.findall();
  }
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
}
