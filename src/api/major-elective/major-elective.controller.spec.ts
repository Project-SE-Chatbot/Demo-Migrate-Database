import { Test, TestingModule } from '@nestjs/testing';
import { MajorElectiveController } from './major-elective.controller';

describe('MajorElectiveController', () => {
  let controller: MajorElectiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MajorElectiveController],
    }).compile();

    controller = module.get<MajorElectiveController>(MajorElectiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
