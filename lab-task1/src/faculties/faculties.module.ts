import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesController } from './faculties.controller.js';
import { FacultiesService } from './faculties.service.js';
import { Faculties } from './faculties/faculties.entities.js';

@Module({
  imports: [TypeOrmModule.forFeature([Faculties])],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}