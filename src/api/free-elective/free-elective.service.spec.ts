import { Test, TestingModule } from '@nestjs/testing';
import { FreeElectiveService } from './free-elective.service';

describe('FreeElectiveService', () => {
  let service: FreeElectiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreeElectiveService],
    }).compile();

    service = module.get<FreeElectiveService>(FreeElectiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
