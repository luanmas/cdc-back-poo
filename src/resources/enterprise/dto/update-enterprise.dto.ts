import { PartialType } from '@nestjs/mapped-types';
import { CreateEnterpriseDto } from './create-enterprise.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateContactDto } from 'src/resources/contact/dto/update-contact.dto';
import { UpdateAddressDto } from 'src/resources/address/dto/update-address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEnterpriseDto extends PartialType(CreateEnterpriseDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(14, 14, { message: 'CNPJ must be exactly 14 characters long' })
  cnpj: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateContactDto)
  contact: UpdateContactDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateAddressDto)
  address: UpdateAddressDto;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  margin: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  updatedAt: Date;
}
