import { Test, TestingModule } from '@nestjs/testing';
import { RegisterKeyController } from './register-key.controller';

describe('RegisterKeyController', () => {
  let controller: RegisterKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterKeyController],
    }).compile();

    controller = module.get<RegisterKeyController>(RegisterKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
