import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AuthenticatedGuard } from 'src/common/utils/Guards';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @UseGuards(AuthenticatedGuard)
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthenticatedGuard)
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }
}
