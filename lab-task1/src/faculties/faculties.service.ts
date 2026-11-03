import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculties } from './faculties/faculties.entities.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculties)
    private readonly facultiesRepo: Repository<Faculties>,
  ) {}

  async createFaculty(faculty: CreateFacultyDto): Promise<Faculties> {
    const exists = await this.facultiesRepo.findOne({ where: { id: faculty.id },});
    if (exists) {
      throw new BadRequestException( `Faculty with id ${faculty.id} already exists`,);
    }
    const facultyEntity = this.facultiesRepo.create(faculty);
    return await this.facultiesRepo.save(facultyEntity);
  }
}