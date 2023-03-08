import { Test, TestingModule } from '@nestjs/testing';
import { TeacherKeyService } from './teacher-key.service';

describe('TeacherKeyService', () => {
  let service: TeacherKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherKeyService],
    }).compile();

    service = module.get<TeacherKeyService>(TeacherKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
