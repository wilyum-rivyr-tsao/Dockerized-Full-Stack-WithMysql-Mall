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

  findOne(id = 0) {
    return this.skuRepository.find({
      where: [
        {
          id,
        },
      ],
      relations: ['warehouse', 'tags', 'properties', 'spu', 'spu.brand'],
    });
  }

  async findByCode(code) {
    console.log('code', code);
    code = code.split(',');
    const queryBuilder = this.skuRepository.createQueryBuilder('sku');
    const query = queryBuilder
      .leftJoin('sku.properties', 'properties')
      .andWhere('properties.id IN (:...code)', { code })
      .groupBy('sku.id')
      .having('COUNT(DISTINCT properties.id) = :codeCount', {
        codeCount: code.length,
      })
      .getMany();
    return query;
    // return this.skuRepository.find({
    //   where: {
    //     properties: In(code),
    //   },
    //   relations: ['warehouse', 'tags', 'properties', 'spu', 'spu.brand'],
    // });
  }

  findTagRelated(tags: Array<number>) {
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
