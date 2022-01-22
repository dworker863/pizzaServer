import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pizza } from './pizza.model';

@Injectable()
export class GoodsService {
  constructor(@InjectModel(Pizza) private pizzaRepository: typeof Pizza) {}

  async getAllGoods() {
    const pizzas = await this.pizzaRepository.findAll();
    console.log(pizzas);
    return { pizzas };
  }
}
