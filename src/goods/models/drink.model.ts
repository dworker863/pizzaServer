import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { IDrink } from '../interfaces/drink.interface';

@Table({ tableName: 'drinks' })
export class Drink extends Model<Drink, IDrink> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  sizes: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  prices: string[];

  @Column({ type: DataType.STRING, allowNull: false })
  image: string;
}
