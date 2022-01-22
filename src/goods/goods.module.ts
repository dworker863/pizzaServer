import { Pizza } from './pizza.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoodsController } from './goods.controller';
import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
  imports: [SequelizeModule.forFeature([Pizza])],
})
export class GoodsModule {}
