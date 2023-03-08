import { Test, TestingModule } from '@nestjs/testing';
import { RegisterKeyService } from './register-key.service';

describe('RegisterKeyService', () => {
  let service: RegisterKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterKeyService],
    }).compile();

    service = module.get<RegisterKeyService>(RegisterKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
