import { Module } from '@nestjs/common';
import { WarehouseSkuService } from './warehouse.service';
import { WarehouseSkuController } from './warehouse.controller';
import { Warehouse } from './entities/warehouse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sku } from '../sku/entities/sku.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse, Sku])],
  exports: [TypeOrmModule],
  controllers: [WarehouseSkuController],
  providers: [WarehouseSkuService],
})
export class WarehouseSkuModule {}
