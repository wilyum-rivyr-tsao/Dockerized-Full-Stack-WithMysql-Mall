import { Spu } from 'src/components/spu/entities/spu.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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
  param: string;

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

  @ManyToOne(() => Spu, (spu) => spu.sku)
  spu?: Spu;
}
