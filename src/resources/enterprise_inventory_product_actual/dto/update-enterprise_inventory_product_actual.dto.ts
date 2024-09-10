import { IsInt, IsOptional } from 'class-validator';
import { EnterpriseInventoryActualLog } from 'src/resources/enterprise_inventory_actual_log/entities/enterprise_inventory_actual_log.entity';

export class UpdateEnterpriseInventoryProductActualDto {
  @IsInt()
  id: number;

  @IsInt()
  @IsOptional()
  quantity?: number;

  @IsInt()
  @IsOptional()
  quantityToDeliver?: number;

  @IsInt()
  @IsOptional()
  quantityQuotation?: number;

  enterpriseInventoryActualLog?: EnterpriseInventoryActualLog;
}
