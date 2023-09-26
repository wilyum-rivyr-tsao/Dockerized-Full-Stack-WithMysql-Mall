import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseSkuController } from './warehouse.controller';
import { WarehouseSkuService } from './warehouse.service';

describe('WarehouseSkuController', () => {
  let controller: WarehouseSkuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseSkuController],
      providers: [WarehouseSkuService],
    }).compile();

    controller = module.get<WarehouseSkuController>(WarehouseSkuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
