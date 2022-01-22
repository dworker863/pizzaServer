import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { IHot } from '../interfaces/hot.interface';

@Table({ tableName: 'hots' })
export class Hot extends Model<Hot, IHot> {
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

  @Column({ type: DataType.STRING, defaultValue: 'hots' })
  category: string;
}
