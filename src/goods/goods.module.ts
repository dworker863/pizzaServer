import { FilesModule } from './../files/files.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoodsController } from './goods.controller';
import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Salad } from './models/salad.model';
import { Snack } from './models/snack.model';
import { Pizza } from './models/pizza.model';
import { Dessert } from './models/dessert.model';
import { Drink } from './models/drink.model';
import { Hot } from './models/hot.model';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
  imports: [
    SequelizeModule.forFeature([Pizza, Salad, Snack, Dessert, Drink, Hot]),
    FilesModule,
  ],
})
export class GoodsModule {}
