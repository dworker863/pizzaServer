import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { IPizza } from '../interfaces/pizza.interface';

@Table({ tableName: 'pizzas' })
export class Pizza extends Model<Pizza, IPizza> {
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
  sizes: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  prices: string[];

  @Column({ type: DataType.STRING, allowNull: false })
  image: string;
}
