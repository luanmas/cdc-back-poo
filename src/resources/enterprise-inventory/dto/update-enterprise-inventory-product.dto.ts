import {
  IsArray,
  IsNotEmpty,
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsInt,
  IsPositive,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty()
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Transform(({ value }) =>
    typeof value === 'string' ? parseInt(value, 10) : value,
  )
  min_quantity?: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Transform(({ value }) =>
    typeof value === 'string' ? parseInt(value, 10) : value,
  )
  margin?: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return value;
  })
  active?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Transform(({ value }) => parseInt(value, 10))
  brand_id?: number;
}

export class UpdateEnterpriseInventoryDto {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateProductDto)
  @IsNotEmpty({ each: true, message: 'Products array must not be empty' })
  products: UpdateProductDto[];
}
