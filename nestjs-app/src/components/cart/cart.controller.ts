import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Request,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() createCartDto: CreateCartDto) {
    console.log('createCartDto', createCartDto);
    return this.cartService.create(req.user.payload.user.id, createCartDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() request) {
    console.log('request', request.user);
    return this.cartService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getByUserId')
  findOneByUserId(@Request() req) {
    const userId = req.user.id;
    return this.cartService.findByUserId(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
