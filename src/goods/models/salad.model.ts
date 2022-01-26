import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { ISalad } from '../interfaces/salad.interface';

@Table({ tableName: 'salads' })
export class Salad extends Model<Salad, ISalad> {
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
