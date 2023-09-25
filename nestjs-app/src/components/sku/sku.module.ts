import { Module } from '@nestjs/common';
import { SkuService } from './sku.service';
import { SkuController } from './sku.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sku } from './entities/sku.entity';
import { Spu } from '../spu/entities/spu.entity';
Spu;

@Module({
  imports: [TypeOrmModule.forFeature([Sku, Spu])],

  exports: [TypeOrmModule],
  controllers: [SkuController],
  providers: [SkuService],
})
export class SkuModule {}
