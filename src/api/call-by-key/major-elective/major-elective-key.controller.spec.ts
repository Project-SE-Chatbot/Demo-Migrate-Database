import { Test, TestingModule } from '@nestjs/testing';
import { MajorElectiveKeyController } from './major-elective-key.controller';

describe('MajorElectiveController', () => {
  let controller: MajorElectiveKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MajorElectiveKeyController],
    }).compile();

    controller = module.get<MajorElectiveKeyController>(MajorElectiveKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
