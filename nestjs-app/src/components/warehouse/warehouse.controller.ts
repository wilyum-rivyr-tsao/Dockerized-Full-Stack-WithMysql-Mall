import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WarehouseSkuService } from './warehouse.service';
import { CreateWarehouseSkuDto } from './dto/create-warehouse-sku.dto';
import { UpdateWarehouseSkuDto } from './dto/update-warehouse-sku.dto';

@Controller('warehouse-sku')
export class WarehouseSkuController {
  constructor(private readonly warehouseSkuService: WarehouseSkuService) {}

  @Post()
  create(@Body() createWarehouseSkuDto: CreateWarehouseSkuDto) {
    return this.warehouseSkuService.create(createWarehouseSkuDto);
  }

  @Get()
  findAll() {
    return this.warehouseSkuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehouseSkuService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWarehouseSkuDto: UpdateWarehouseSkuDto,
  ) {
    return this.warehouseSkuService.update(+id, updateWarehouseSkuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warehouseSkuService.remove(+id);
  }
}
