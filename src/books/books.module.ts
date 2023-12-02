import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from '@/books/models/book.model';
import { BooksController } from './books.controller';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
