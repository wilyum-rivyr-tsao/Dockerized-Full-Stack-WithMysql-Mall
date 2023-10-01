import { Module } from '@nestjs/common';
import { SkuService } from './sku.service';
import { SkuController } from './sku.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sku } from './entities/sku.entity';
import { Spu } from '../spu/entities/spu.entity';
import { Warehouse } from '../warehouse/entities/warehouse.entity';
import { Tag } from '../tags/entities/tag.entity';
import { Property } from '../property/entities/property.entity';
import { Brand } from '../brand/entities/brand.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sku, Spu, Warehouse, Tag, Property, Brand]),
  ],

  exports: [TypeOrmModule],
  controllers: [SkuController],
  providers: [SkuService],
})
export class SkuModule {}
