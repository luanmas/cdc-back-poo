import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseInventoryController } from './enterprise-inventory.controller';
import { EnterpriseInventoryService } from './enterprise-inventory.service';

describe('EnterpriseInventoryController', () => {
  let controller: EnterpriseInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnterpriseInventoryController],
      providers: [EnterpriseInventoryService],
    }).compile();

    controller = module.get<EnterpriseInventoryController>(EnterpriseInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
