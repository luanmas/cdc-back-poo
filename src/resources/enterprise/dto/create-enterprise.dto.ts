import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, Length, ValidateNested } from 'class-validator';
import { CreateAddressDto } from 'src/resources/address/dto/create-address.dto';
import { CreateContactDto } from 'src/resources/contact/dto/create-contact.dto';

export class CreateEnterpriseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(14)
  cnpj: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateContactDto)
  contact: CreateContactDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
