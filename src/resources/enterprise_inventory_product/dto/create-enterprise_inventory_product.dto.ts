import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEnterpriseInventoryProductDto {
  @IsNumber()
  @IsNotEmpty()
  min_quantity: number;

  @IsNumber()
  @IsNotEmpty()
  margin: number;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @IsNotEmpty()
  @IsNumber()
  enterprise_inventory_id: number;
}
