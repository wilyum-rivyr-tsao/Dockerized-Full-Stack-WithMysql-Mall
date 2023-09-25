import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Spu } from '../../spu/entities/spu.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  letter?: string;

  @OneToMany(() => Spu, (spu) => spu.brand)
  spu?: Spu[];
}
