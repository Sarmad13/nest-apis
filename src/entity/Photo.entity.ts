/* eslint-disable prettier/prettier */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { PhotoMetadata } from './PhotoMetadata.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column('text')
  description: string;
  @Column()
  filename: string;
  @Column('int')
  views: number;
  @Column()
  isPublished: boolean;
  @OneToOne((type) => PhotoMetadata, (photometadata) => photometadata.photo)
  metadata: PhotoMetadata;
}
