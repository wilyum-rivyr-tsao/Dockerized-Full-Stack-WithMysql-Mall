import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { Brand } from './entities/brand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spu } from '../spu/entities/spu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spu, Brand])],
  exports: [TypeOrmModule, BrandService],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
