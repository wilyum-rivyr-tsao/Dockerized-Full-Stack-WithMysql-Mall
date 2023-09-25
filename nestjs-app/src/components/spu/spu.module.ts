import { Module } from '@nestjs/common';
import { SpuService } from './spu.service';
import { SpuController } from './spu.controller';
import { Spu } from './entities/spu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sku } from '../sku/entities/sku.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spu, Sku])],
  exports: [TypeOrmModule],
  controllers: [SpuController],
  providers: [SpuService],
})
export class SpuModule {}
