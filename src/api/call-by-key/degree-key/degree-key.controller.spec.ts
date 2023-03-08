import { Test, TestingModule } from '@nestjs/testing';
import { DegreeKeyController } from './degree-key.controller';

describe('DegreeKeyController', () => {
  let controller: DegreeKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DegreeKeyController],
    }).compile();

    controller = module.get<DegreeKeyController>(DegreeKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
