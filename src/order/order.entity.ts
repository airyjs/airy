import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Order extends Model<Order> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  uuid: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.NUMBER, allowNull: false })
  count: number;
}
