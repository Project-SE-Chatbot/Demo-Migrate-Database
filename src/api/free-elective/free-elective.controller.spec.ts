import { Test, TestingModule } from '@nestjs/testing';
import { FreeElectiveController } from './free-elective.controller';

describe('FreeElectiveController', () => {
  let controller: FreeElectiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreeElectiveController],
    }).compile();

    controller = module.get<FreeElectiveController>(FreeElectiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
