import { Test, TestingModule } from '@nestjs/testing';
import { MajorElectiveService } from './major-elective.service';

describe('MajorElectiveService', () => {
  let service: MajorElectiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorElectiveService],
    }).compile();

    service = module.get<MajorElectiveService>(MajorElectiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
