import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Brand } from 'src/components/brand/entities/brand.entity';

import { Sku } from 'src/components/sku/entities/sku.entity';

@Entity()
export class Spu {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  sub_title: string;

  @Column()
  category_id: string;

  @Column()
  brandId: string;

  @Column()
  spg_id: string;

  @Column()
  saleable: string;

  @Column()
  valid: string;

  @Column({ default: null, type: 'datetime' })
  create_time?: Date;

  @Column({ default: null, type: 'datetime' })
  last_update_time?: Date;

  @ManyToOne(() => Brand, (brand) => brand.spu)
  brand?: Brand;

  @OneToMany(() => Sku, (sku) => sku.spu)
  sku?: Sku[];
}
