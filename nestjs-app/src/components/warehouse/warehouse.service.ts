import { Injectable } from '@nestjs/common';
import { CreateWarehouseSkuDto } from './dto/create-warehouse-sku.dto';
import { UpdateWarehouseSkuDto } from './dto/update-warehouse-sku.dto';

@Injectable()
export class WarehouseSkuService {
  create(createWarehouseSkuDto: CreateWarehouseSkuDto) {
    return 'This action adds a new warehouseSku';
  }

  findAll() {
    return `This action returns all warehouseSku`;
  }

  findOne(id: number) {
    return `This action returns a #${id} warehouseSku`;
  }

  update(id: number, updateWarehouseSkuDto: UpdateWarehouseSkuDto) {
    return `This action updates a #${id} warehouseSku`;
  }

  remove(id: number) {
    return `This action removes a #${id} warehouseSku`;
  }
}
