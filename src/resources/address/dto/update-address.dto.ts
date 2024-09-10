import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateAddressDto } from './create-address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  cep: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  city: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  district: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  street: string;
}
