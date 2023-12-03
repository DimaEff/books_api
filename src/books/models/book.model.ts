import { MIN_PUBLISH_YEAR } from '@/books/constants';
import { MIDDLE_STRING_LENGTH, MIN_STRING_LENGTH } from '@/common';
import {
  AllowNull,
  Column,
  Max,
  Min,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
export class Book extends Model {
  @AllowNull(false)
  @Min(MIN_STRING_LENGTH)
  @Max(MIDDLE_STRING_LENGTH)
  @Column
  title: string;

  @AllowNull(false)
  @Min(MIN_STRING_LENGTH)
  @Max(MIDDLE_STRING_LENGTH)
  @Column
  author: string;

  @AllowNull(false)
  @Min(MIN_PUBLISH_YEAR)
  @Max(new Date().getFullYear())
  @Column
  yearOfPublication: number;
}
