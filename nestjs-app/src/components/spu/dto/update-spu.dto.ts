import { PartialType } from '@nestjs/swagger';
import { CreateSpuDto } from './create-spu.dto';

export class UpdateSpuDto extends PartialType(CreateSpuDto) {}
