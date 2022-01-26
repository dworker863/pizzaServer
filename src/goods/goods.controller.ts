import { ISnack } from './interfaces/snack.interface';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
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
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('goods')
export class GoodsController {
  constructor(private goodsService: GoodsService) {}

  @Get()
  async findAll() {
    return this.goodsService.getAllGoods();
  }

  @Post('/pizza')
  @UseInterceptors(FileInterceptor('image'))
  async postPizza(
    @Body() pizzaDto: CreatePizzaDto,
    @UploadedFile() image,
  ): Promise<IPizza> {
    return this.goodsService.createPizza(pizzaDto, image);
  }

  @Post('/salad')
  @UseInterceptors(FileInterceptor('image'))
  async postSalad(
    @Body() saladDto: CreateSaladDto,
    @UploadedFile() image,
  ): Promise<ISalad> {
    return this.goodsService.createSalad(saladDto, image);
  }

  @Post('/snack')
  @UseInterceptors(FileInterceptor('image'))
  async postSnack(
    @Body() snackDto: CreateSnackDto,
    @UploadedFile() image,
  ): Promise<ISnack> {
    return this.goodsService.createSnack(snackDto, image);
  }

  @Post('/dessert')
  @UseInterceptors(FileInterceptor('image'))
  async postDessert(
    @Body() dessertDto: CreateDessertDto,
    @UploadedFile() image,
  ): Promise<IDessert> {
    return this.goodsService.createDessert(dessertDto, image);
  }

  @Post('/drink')
  @UseInterceptors(FileInterceptor('image'))
  async postDrink(
    @Body() drinkDto: CreateDrinkDto,
    @UploadedFile() image,
  ): Promise<IDrink> {
    return this.goodsService.createDrink(drinkDto, image);
  }

  @Post('/hot')
  @UseInterceptors(FileInterceptor('image'))
  async postHot(
    @Body() hotDto: CreateHotDto,
    @UploadedFile() image,
  ): Promise<IHot> {
    return this.goodsService.createHot(hotDto, image);
  }
}
