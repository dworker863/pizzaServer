import { ISnack } from './interfaces/snack.interface';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { CreateSaladDto } from './dto/create-salad.dto';
import { GoodsService } from './goods.service';
import { IPizza } from './interfaces/pizza.interface';
import { ISalad } from './interfaces/salad.interface';
import { CreateSnackDto } from './dto/create-snack.dto';
import { CreateDessertDto } from './dto/create-dessert.dto';
import { IDessert } from './interfaces/desserts.interface';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { IDrink } from './interfaces/drink.interface';
import { CreateHotDto } from './dto/create-hot.dto';
import { IHot } from './interfaces/hot.interface';

@Controller('goods')
export class GoodsController {
  constructor(private goodsService: GoodsService) {}

  @Get()
  async findAll() {
    return this.goodsService.getAllGoods();
  }

  @Post('/pizza')
  async postPizza(@Body() pizzaDto: CreatePizzaDto): Promise<IPizza> {
    return this.goodsService.createPizza(pizzaDto);
  }

  @Post('/salad')
  async postSalad(@Body() saladDto: CreateSaladDto): Promise<ISalad> {
    return this.goodsService.createSalad(saladDto);
  }

  @Post('/snack')
  async postSnack(@Body() snackDto: CreateSnackDto): Promise<ISnack> {
    return this.goodsService.createSnack(snackDto);
  }

  @Post('/dessert')
  async postDessert(@Body() dessertDto: CreateDessertDto): Promise<IDessert> {
    return this.goodsService.createDessert(dessertDto);
  }

  @Post('/drink')
  async postDrink(@Body() drinkDto: CreateDrinkDto): Promise<IDrink> {
    return this.goodsService.createDrink(drinkDto);
  }

  @Post('/hot')
  async postHot(@Body() hotDto: CreateHotDto): Promise<IHot> {
    return this.goodsService.createHot(hotDto);
  }
}
