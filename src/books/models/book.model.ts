import {
  AllowNull,
  Column,
  DataType,
  Max,
  Min,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ createdAt: 'year_of_publication', updatedAt: false })
export class Book extends Model {
  @AllowNull(false)
  @Min(3)
  @Max(128)
  @Column({ type: DataType.STRING })
  title: string;

  @AllowNull(false)
  @Min(3)
  @Max(128)
  @Column({ type: DataType.STRING })
  author: string;
}
