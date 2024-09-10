import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEnterpriseCategoryDto {
  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  @IsNotEmpty()
  @IsNumber()
  id_category: number;

  @IsNotEmpty()
  @IsNumber()
  id_enterprise: number;
}
