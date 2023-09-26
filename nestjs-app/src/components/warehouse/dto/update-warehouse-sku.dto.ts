import { PartialType } from '@nestjs/swagger';
import { CreateWarehouseSkuDto } from './create-warehouse-sku.dto';

export class UpdateWarehouseSkuDto extends PartialType(CreateWarehouseSkuDto) {}
