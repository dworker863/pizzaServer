import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ICategory } from './interfaces/category.interface';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async findAll(): Promise<ICategory[]> {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async postCategory(
    @Body() categoryDto: CreateCategoryDto,
    @UploadedFile() image: any,
  ) {
    return this.categoriesService.createCategory(categoryDto, image);
  }
}
