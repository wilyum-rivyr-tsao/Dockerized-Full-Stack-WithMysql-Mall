import { IsNotEmpty } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty({ message: 'skuId field cannot be empty' })
  skuId: string;
  @IsNotEmpty({ message: 'num field cannot be empty' })
  num: number;
}
