import { Body, Controller, Post } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { Faculties } from './faculties/faculties.entities.js';
@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post('create-faculty')
  async createFaculty(@Body() faculty: CreateFacultyDto): Promise<Faculties> {
    return await this.facultiesService.createFaculty(faculty);
  }
}