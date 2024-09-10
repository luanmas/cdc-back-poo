import {
  Controller,
  Get,
  Param,
  Req,
  UseGuards,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { EnterpriseInventoryService } from './enterprise-inventory.service';
import { EnterpriseInventory } from './entities/enterprise-inventory.entity';
import { Request } from 'express';
import { AuthenticatedGuard } from 'src/common/utils/Guards';
import { UpdateEnterpriseInventoryDto } from './dto/update-enterprise-inventory-product.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Enterprise Inventory')
@Controller('enterprise-inventory')
export class EnterpriseInventoryController {
  constructor(
    private readonly enterpriseInventoryService: EnterpriseInventoryService,
  ) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  @ApiQuery({ name: 'categoryName', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({
    name: 'orderDirection',
    required: false,
    enum: ['ASC', 'DESC'],
    example: 'ASC',
  })
  @ApiQuery({ name: 'page', required: false, type: String, example: '1' })
  @ApiQuery({ name: 'limit', required: false, type: String, example: '10' })
  async findAll(
    @Req() request: Request,
    @Query('categoryName') categoryName: string,
    @Query('orderBy') orderBy: string,
    @Query('orderDirection') orderDirection: 'ASC' | 'DESC',
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ): Promise<EnterpriseInventory[]> {
    return this.enterpriseInventoryService.findAll(
      request.user,
      categoryName,
      orderBy,
      orderDirection,
      page,
      limit,
    );
  }

  @UseGuards(AuthenticatedGuard)
  @ApiQuery({ name: 'productName', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({
    name: 'orderDirection',
    required: false,
    enum: ['ASC', 'DESC'],
    example: 'ASC',
  })
  @ApiQuery({ name: 'page', required: false, type: String, example: '1' })
  @ApiQuery({ name: 'limit', required: false, type: String, example: '10' })
  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('productName') search: string,
    @Query('orderBy') orderBy: string,
    @Query('orderDirection') orderDirection: 'ASC' | 'DESC' = 'ASC',
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.enterpriseInventoryService.findOne(
      +id,
      page,
      limit,
      orderBy,
      orderDirection,
      search,
    );
  }

  @UseGuards(AuthenticatedGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEnterpriseInventoryDto: UpdateEnterpriseInventoryDto,
  ): Promise<void> {
    await this.enterpriseInventoryService.update(
      +id,
      updateEnterpriseInventoryDto,
    );
  }
}
