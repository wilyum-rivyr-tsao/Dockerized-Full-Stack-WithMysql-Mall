import { Sku } from 'src/components/sku/entities/sku.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  skuId: string;

  @Column()
  num: number;

  @ManyToOne(() => Sku, (sku) => sku.cart)
  sku: Sku;
}
