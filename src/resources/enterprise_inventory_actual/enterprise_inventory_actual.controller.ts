import {
  Controller,
  Get,
  Body,
  Param,
  Req,
  UseGuards,
  Query,
  Put,
} from '@nestjs/common';
import { EnterpriseInventoryActualService } from './enterprise_inventory_actual.service';
import { Request } from 'express';
import { AuthenticatedGuard } from 'src/common/utils/Guards';
import { ApiQuery } from '@nestjs/swagger';
import { UpdateEnterpriseInventoryActualDto } from './dto/update-enterprise_inventory_actual.dto copy';

@Controller('enterprise-inventory-actual')
export class EnterpriseInventoryActualController {
  constructor(
    private readonly enterpriseInventoryActualService: EnterpriseInventoryActualService,
  ) {}

  @UseGuards(AuthenticatedGuard)
  @Get('/categories')
  findAllCategories(
    @Req() request: Request,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.enterpriseInventoryActualService.findAllCategories(
      request.user,
      page,
      limit,
    );
  }

  @ApiQuery({ name: 'page', required: false, type: String, example: '1' })
  @ApiQuery({ name: 'limit', required: false, type: String, example: '10' })
  @ApiQuery({ name: 'productName', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({
    name: 'orderDirection',
    required: false,
    enum: ['ASC', 'DESC'],
    example: 'ASC',
  })
  @UseGuards(AuthenticatedGuard)
  @Get('')
  findAll(
    @Req() request: Request,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('orderBy') orderBy: string,
    @Query('orderDirection') orderDirection: 'ASC' | 'DESC',
    @Query('productName') productName: string,
  ) {
    return this.enterpriseInventoryActualService.findAll(
      request.user,
      page,
      limit,
      orderBy,
      orderDirection,
      productName,
    );
  }

  @ApiQuery({ name: 'page', required: false, type: String, example: '1' })
  @ApiQuery({ name: 'limit', required: false, type: String, example: '10' })
  @ApiQuery({ name: 'categoryName', required: false })
  @UseGuards(AuthenticatedGuard)
  @Get('/log')
  findAllLogs(
    @Req() request: Request,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('categoryName') categoryName: string,
  ) {
    return this.enterpriseInventoryActualService.findLogs(
      request.user,
      page,
      limit,
      categoryName,
    );
  }

  @ApiQuery({ name: 'page', required: false, type: String, example: '1' })
  @ApiQuery({ name: 'limit', required: false, type: String, example: '10' })
  @ApiQuery({ name: 'productName', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({
    name: 'orderDirection',
    required: false,
    enum: ['ASC', 'DESC'],
    example: 'ASC',
  })
  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Req() request: Request,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('orderBy') orderBy: string,
    @Query('orderDirection') orderDirection: 'ASC' | 'DESC',
    @Query('productName') productName: string,
  ) {
    return this.enterpriseInventoryActualService.findOne(
      request.user,
      +id,
      page,
      limit,
      orderBy,
      orderDirection,
      productName,
    );
  }

  @ApiQuery({ name: 'page', required: false, type: String, example: '1' })
  @ApiQuery({ name: 'limit', required: false, type: String, example: '10' })
  @ApiQuery({ name: 'productName', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({
    name: 'orderDirection',
    required: false,
    enum: ['ASC', 'DESC'],
    example: 'ASC',
  })
  @UseGuards(AuthenticatedGuard)
  @Get('/log/:id')
  findOneLog(
    @Param('id') id: string,
    @Req() request: Request,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('orderBy') orderBy: string,
    @Query('orderDirection') orderDirection: 'ASC' | 'DESC',
    @Query('productName') productName: string,
  ) {
    return this.enterpriseInventoryActualService.findOneLog(
      request.user,
      +id,
      page,
      limit,
      orderBy,
      orderDirection,
      productName,
    );
  }

  @UseGuards(AuthenticatedGuard)
  @Put('')
  update(
    @Req() request: Request,
    @Body()
    updateEnterpriseInventoryActualDto: UpdateEnterpriseInventoryActualDto,
  ) {
    return this.enterpriseInventoryActualService.update(
      updateEnterpriseInventoryActualDto,
      request.user,
    );
  }
}
