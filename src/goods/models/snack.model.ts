import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { ISnack } from '../interfaces/snack.interface';

@Table({ tableName: 'snacks' })
export class Snack extends Model<Snack, ISnack> {
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

  @Column({ type: DataType.STRING, allowNull: false })
  price: string;

  @Column({ type: DataType.STRING, defaultValue: 'snacks' })
  category: string;
}
