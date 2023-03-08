import { Test, TestingModule } from '@nestjs/testing';
import { MajorKeyController } from './major-key.controller';

describe('MajorKeyController', () => {
  let controller: MajorKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MajorKeyController],
    }).compile();

    controller = module.get<MajorKeyController>(MajorKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
