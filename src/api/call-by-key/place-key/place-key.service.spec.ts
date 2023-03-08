import { Test, TestingModule } from '@nestjs/testing';
import { PlaceKeyService } from './place-key.service';

describe('PlaceKeyService', () => {
  let service: PlaceKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceKeyService],
    }).compile();

    service = module.get<PlaceKeyService>(PlaceKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
