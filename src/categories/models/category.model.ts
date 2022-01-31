import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ICategory } from './../interfaces/category.interface';

@Table({ tableName: 'categories' })
export class Category extends Model<Category, ICategory> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  image: string;
}
