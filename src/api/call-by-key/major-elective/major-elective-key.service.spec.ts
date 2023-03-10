import { Test, TestingModule } from '@nestjs/testing';
import { MajorElectiveKeyService } from './major-elective-key.service';

describe('MajorElectiveService', () => {
  let service: MajorElectiveKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorElectiveKeyService],
    }).compile();

    service = module.get<MajorElectiveKeyService>(MajorElectiveKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
