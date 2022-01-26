import { FilesService } from './../files/files.service';
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
    @InjectModel(Snack) private snackRepository: typeof Snack,
    @InjectModel(Salad) private saladRepository: typeof Salad,
    @InjectModel(Dessert) private dessertRepository: typeof Dessert,
    @InjectModel(Drink) private drinkRepository: typeof Drink,
    @InjectModel(Hot) private hotRepository: typeof Hot,
    private filesService: FilesService,
  ) {}

  async getAllGoods() {
    const pizzas = await this.pizzaRepository.findAll();
    const snacks = await this.snackRepository.findAll();
    const salads = await this.saladRepository.findAll();
    const desserts = await this.dessertRepository.findAll();
    const drinks = await this.drinkRepository.findAll();
    const hots = await this.hotRepository.findAll();
    return { pizzas, snacks, salads, desserts, drinks, hots };
  }

  async createPizza(dto: CreatePizzaDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    const pizza = await this.pizzaRepository.create({
      ...dto,
      image: 'http://localhost:5000/' + fileName,
    });
    return pizza;
  }

  async createSalad(dto: CreateSaladDto, image: any) {
    const fileName = await this.filesService.createFile(image);

    const salad = await this.saladRepository.create({
      ...dto,
      image: 'http://localhost:5000/' + fileName,
    });
    return salad;
  }

  async createSnack(dto: CreateSnackDto, image: any) {
    const fileName = await this.filesService.createFile(image);

    const snack = await this.snackRepository.create({
      ...dto,
      image: 'http://localhost:5000/' + fileName,
    });
    return snack;
  }

  async createDessert(dto: CreateDessertDto, image: any) {
    const fileName = await this.filesService.createFile(image);

    const dessert = await this.dessertRepository.create({
      ...dto,
      image: 'http://localhost:5000/' + fileName,
    });
    return dessert;
  }

  async createDrink(dto: CreateDrinkDto, image: any) {
    const fileName = await this.filesService.createFile(image);

    const drink = await this.drinkRepository.create({
      ...dto,
      image: 'http://localhost:5000/' + fileName,
    });
    return drink;
  }

  async createHot(dto: CreateHotDto, image: any) {
    const fileName = await this.filesService.createFile(image);

    const hot = await this.hotRepository.create({
      ...dto,
      image: 'http://localhost:5000/' + fileName,
    });
    return hot;
  }
}
