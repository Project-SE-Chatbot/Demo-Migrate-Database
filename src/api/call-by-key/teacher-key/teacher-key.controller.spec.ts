import { Test, TestingModule } from '@nestjs/testing';
import { TeacherKeyController } from './teacher-key.controller';

describe('TeacherKeyController', () => {
  let controller: TeacherKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherKeyController],
    }).compile();

    controller = module.get<TeacherKeyController>(TeacherKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
