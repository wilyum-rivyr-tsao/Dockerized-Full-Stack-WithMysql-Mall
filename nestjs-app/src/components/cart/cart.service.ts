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

  async create(createCartDto: CreateCartDto) {
    return await this.cartRepository
      .save(createCartDto)
      .then((res) => res)
      .catch((e) => console.log(e));
  }

  findAll() {
    return this.cartRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  findOneByUserId(id: string) {
    return this.cartRepository.find({
      where: {
        userId: id,
      },
      relations: {
        sku: true,
      },
    });
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
