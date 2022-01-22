import { Controller, Get } from '@nestjs/common';
import { GoodsService } from './goods.service';

@Controller('goods')
export class GoodsController {
  constructor(private goodsService: GoodsService) {}

  @Get()
  findAll() {
    return this.goodsService.getAllGoods();
  }
}
