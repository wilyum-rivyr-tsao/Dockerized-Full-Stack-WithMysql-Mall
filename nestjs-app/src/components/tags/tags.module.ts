import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Sku } from '../sku/entities/sku.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, Sku])],
  exports: [TypeOrmModule],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
