import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  UsePipes,
  ValidationPipe,
  Req,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { Enterprise } from './entities/enterprise.entity';
import { Request } from 'express';
import { AuthenticatedGuard } from 'src/common/utils/Guards';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Enterprise')
@Controller('enterprises')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseGuards(AuthenticatedGuard)
  async create(
    @Req() request: Request,
    @Body() createEnterpriseDto: CreateEnterpriseDto,
  ): Promise<Enterprise> {
    if (request) {
      return this.enterpriseService.create(createEnterpriseDto, request.user);
    }
  }

  @Get()
  @UseGuards(AuthenticatedGuard)
  async findAll() {
    return this.enterpriseService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthenticatedGuard)
  async findOne(@Param('id') id: number): Promise<Enterprise> {
    return this.enterpriseService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseGuards(AuthenticatedGuard)
  async update(
    @Param('id') id: number,
    @Body() updateEnterpriseDto: UpdateEnterpriseDto,
  ): Promise<Enterprise> {
    return await this.enterpriseService.update(id, updateEnterpriseDto);
  }

  @Delete(':id')
  @UseGuards(AuthenticatedGuard)
  async remove(
    @Param('id') id: number,
    @Req() request: Request,
  ): Promise<void> {
    await this.enterpriseService.remove(id, request.user);
  }
}
