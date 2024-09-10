import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseInventoryActualController } from './enterprise_inventory_actual.controller';
import { EnterpriseInventoryActualService } from './enterprise_inventory_actual.service';

describe('EnterpriseInventoryActualController', () => {
  let controller: EnterpriseInventoryActualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnterpriseInventoryActualController],
      providers: [EnterpriseInventoryActualService],
    }).compile();

    controller = module.get<EnterpriseInventoryActualController>(EnterpriseInventoryActualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
