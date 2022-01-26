import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { IDessert } from '../interfaces/desserts.interface';

@Table({ tableName: 'desserts' })
export class Dessert extends Model<Dessert, IDessert> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  prices: string[];

  @Column({ type: DataType.STRING, allowNull: false })
  image: string;
}
