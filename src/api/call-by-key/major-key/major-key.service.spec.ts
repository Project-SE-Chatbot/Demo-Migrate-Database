import { Test, TestingModule } from '@nestjs/testing';
import { MajorKeyService } from './major-key.service';

describe('MajorKeyService', () => {
  let service: MajorKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorKeyService],
    }).compile();

    service = module.get<MajorKeyService>(MajorKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
