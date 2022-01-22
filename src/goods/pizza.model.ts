import { Column, DataType, Table, Model } from 'sequelize-typescript';

interface IPizza {
  name: string;
  description: string;
  size: string;
  price: string;
}

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

  @Column({ type: DataType.STRING, allowNull: false })
  size: string;

  @Column({ type: DataType.STRING, allowNull: false })
  price: string;

  @Column({ type: DataType.STRING, defaultValue: 'pizzas' })
  category: 'pizzas';
}
