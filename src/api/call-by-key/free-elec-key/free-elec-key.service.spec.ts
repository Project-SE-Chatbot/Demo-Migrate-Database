import { Test, TestingModule } from '@nestjs/testing';
import { FreeElecKeyService } from './free-elec-key.service';

describe('FreeElecKeyService', () => {
  let service: FreeElecKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreeElecKeyService],
    }).compile();

    service = module.get<FreeElecKeyService>(FreeElecKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
