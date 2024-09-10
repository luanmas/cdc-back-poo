import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateContactDto } from './create-contact.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  telephone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  cellPhone: string;
}
