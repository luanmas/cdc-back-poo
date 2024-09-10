import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseInventoryService } from './enterprise-inventory.service';

describe('EnterpriseInventoryService', () => {
  let service: EnterpriseInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnterpriseInventoryService],
    }).compile();

    service = module.get<EnterpriseInventoryService>(EnterpriseInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
