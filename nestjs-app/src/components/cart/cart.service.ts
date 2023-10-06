import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async create(userId: string, createCartDto: CreateCartDto) {
    return await this.cartRepository
      .save({ userId, ...createCartDto })
      .then((res) => res)
      .catch((e) => console.log(e));
  }

  findAll() {
    return this.cartRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  findByUserId(id: string) {
    console.log('id', id);
    return this.cartRepository.find({
      where: {
        userId: id,
      },
      relations: {
        sku: true,
      },
    });
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return await this.cartRepository
      .save({ id, ...updateCartDto })
      .then((res) => res)
      .catch((e) => console.log(e));
  }

  async remove(id: number) {
    return await this.cartRepository
      .delete({ id })
      .then((res) => res)
      .catch((e) => console.log(e));
  }
}
