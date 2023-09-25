import { Injectable } from '@nestjs/common';
import { CreateSpuDto } from './dto/create-spu.dto';
import { UpdateSpuDto } from './dto/update-spu.dto';
import { Repository } from 'typeorm';
import { Spu } from './entities/spu.entity';
import { InjectRepository } from '@nestjs/typeorm';
Spu;

@Injectable()
export class SpuService {
  constructor(
    @InjectRepository(Spu)
    private spuRepository: Repository<Spu>,
  ) {}

  create(createSpuDto: CreateSpuDto) {
    return 'This action adds a new spu';
  }

  findAll() {
    return this.spuRepository.find({
      relations: {
        sku: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} spu`;
  }

  update(id: number, updateSpuDto: UpdateSpuDto) {
    return `This action updates a #${id} spu`;
  }

  remove(id: number) {
    return `This action removes a #${id} spu`;
  }
}
