import { CreateSaladDto } from './dto/create-salad.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { Pizza } from './models/pizza.model';
import { Salad } from './models/salad.model';
import { CreateSnackDto } from './dto/create-snack.dto';
import { Snack } from './models/snack.model';
import { CreateDessertDto } from './dto/create-dessert.dto';
import { Dessert } from './models/dessert.model';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { Drink } from './models/drink.model';
import { CreateHotDto } from './dto/create-hot.dto';
import { Hot } from './models/hot.model';

@Injectable()
export class GoodsService {
  constructor(
    @InjectModel(Pizza) private pizzaRepository: typeof Pizza,
    @InjectModel(Salad) private saladRepository: typeof Salad,
    @InjectModel(Snack) private snackRepository: typeof Snack,
    @InjectModel(Dessert) private dessertRepository: typeof Dessert,
    @InjectModel(Drink) private drinkRepository: typeof Drink,
    @InjectModel(Hot) private hotRepository: typeof Hot,
  ) {}

  async getAllGoods() {
    const pizzas = await this.pizzaRepository.findAll();
    const salads = await this.saladRepository.findAll();
    return { pizzas, salads };
  }

  async createPizza(dto: CreatePizzaDto) {
    const pizza = await this.pizzaRepository.create(dto);
    return pizza;
  }

  async createSalad(dto: CreateSaladDto) {
    const salad = await this.saladRepository.create(dto);
    return salad;
  }

  async createSnack(dto: CreateSnackDto) {
    const snack = await this.snackRepository.create(dto);
    return snack;
  }

  async createDessert(dto: CreateDessertDto) {
    const dessert = await this.dessertRepository.create(dto);
    return dessert;
  }

  async createDrink(dto: CreateDrinkDto) {
    const drink = await this.drinkRepository.create(dto);
    return drink;
  }

  async createHot(dto: CreateHotDto) {
    const hot = await this.hotRepository.create(dto);
    return hot;
  }
}
