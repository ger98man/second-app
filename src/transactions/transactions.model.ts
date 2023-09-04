import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'transactions' })
export class Transaction extends Model<Transaction> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @ApiProperty()
  @Column({ type: DataType.BIGINT, allowNull: false })
  value: number;

  @ApiProperty()
  @Column({ type: DataType.ENUM('login-reward', 'admin-action'), allowNull: false })
  type: string;
}
