import { Injectable } from '@nestjs/common';
import { CreateSkuDto } from './dto/create-sku.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, UpdateResult } from 'typeorm';
import { Sku } from './entities/sku.entity';

@Injectable()
export class SkuService {
  constructor(
    @InjectRepository(Sku)
    private skuRepository: Repository<Sku>,
  ) {}

  create(createSkuDto: CreateSkuDto) {
    return 'This action adds a new sku';
  }

  findAll() {
    return this.skuRepository.find();
  }

  findOne(id = 0, code) {
    console.log('code', code);
    return this.skuRepository.find({
      where: [
        {
          id,
        },
        {
          code,
        },
      ],
      relations: {
        warehouse: true,
        tags: true,
        properties: true,
      },
    });
  }

  findTagRelated(tags: Array<number>) {
    console.log('tags', tags);
    return this.skuRepository.find({
      relations: ['tags'],
      where: {
        tags: {
          id: In(tags),
        },
      },
    });
  }

  update(id: number, updateSkuDto: UpdateSkuDto) {
    return `This action updates a #${id} sku`;
  }

  remove(id: number) {
    return `This action removes a #${id} sku`;
  }
}
