import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseInventoryActualService } from './enterprise_inventory_actual.service';

describe('EnterpriseInventoryActualService', () => {
  let service: EnterpriseInventoryActualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnterpriseInventoryActualService],
    }).compile();

    service = module.get<EnterpriseInventoryActualService>(EnterpriseInventoryActualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
