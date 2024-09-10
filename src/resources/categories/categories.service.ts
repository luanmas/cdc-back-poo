import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<any> {
    try {
      return await this.categoryRepository.find();
    } catch (error) {
      throw new Error('An unexpected error occurred');
    }
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOne({
      where: { id },
    });
  }
}
