import { CreateCategoryDto } from './dto/create-category.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
    private filesService: FilesService,
  ) {}

  async getAllCategories() {
    const categories = await this.categoryRepository.findAll();
    return categories;
  }

  async createCategory(dto: CreateCategoryDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    const category = await this.categoryRepository.create({
      ...dto,
      image: 'http://localhost:5000/' + fileName,
    });
    return category;
  }
}
