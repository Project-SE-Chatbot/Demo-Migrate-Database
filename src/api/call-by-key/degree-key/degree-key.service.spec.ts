import { Test, TestingModule } from '@nestjs/testing';
import { DegreeKeyService } from './degree-key.service';

describe('DegreeKeyService', () => {
  let service: DegreeKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DegreeKeyService],
    }).compile();

    service = module.get<DegreeKeyService>(DegreeKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
