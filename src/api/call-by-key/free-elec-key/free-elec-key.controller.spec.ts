import { Test, TestingModule } from '@nestjs/testing';
import { FreeElecKeyController } from './free-elec-key.controller';

describe('FreeElecKeyController', () => {
  let controller: FreeElecKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreeElecKeyController],
    }).compile();

    controller = module.get<FreeElecKeyController>(FreeElecKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
