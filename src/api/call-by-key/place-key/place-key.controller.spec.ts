import { Test, TestingModule } from '@nestjs/testing';
import { PlaceKeyController } from './place-key.controller';

describe('PlaceKeyController', () => {
  let controller: PlaceKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceKeyController],
    }).compile();

    controller = module.get<PlaceKeyController>(PlaceKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
