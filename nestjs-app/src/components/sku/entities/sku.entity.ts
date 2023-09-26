import { Cart } from 'src/components/cart/entities/cart.entity';
import { Property } from 'src/components/property/entities/property.entity';
import { Spu } from 'src/components/spu/entities/spu.entity';
import { Tag } from 'src/components/tags/entities/tag.entity';
import { Warehouse } from 'src/components/warehouse/entities/warehouse.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Sku {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  spuId: string;

  @Column()
  title: string;

  @Column()
  images: string;

  @Column()
  price: string;

  @Column()
  saleable: string;

  @Column()
  valid: string;

  @Column({ default: null, type: 'datetime' })
  create_time?: Date;

  @Column({ default: null, type: 'datetime' })
  last_update_time?: Date;

  @Column()
  org_price: string;

  @Column()
  decs: string;

  @Column()
  product_desc: string;

  @Column()
  code: string;

  @ManyToOne(() => Spu, (spu) => spu.sku)
  spu?: Spu;

  @OneToOne(() => Warehouse)
  @JoinColumn()
  warehouse?: Warehouse;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @ManyToMany(() => Property)
  @JoinTable()
  properties: Property[];

  @OneToMany(() => Cart, (cart) => cart.sku)
  cart: Cart[];
}
