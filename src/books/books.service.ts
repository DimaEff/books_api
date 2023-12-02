import { Book } from '@/books/models/book.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private readonly bookModel: typeof Book,
  ) {}

  public readonly addBook = async (): Promise<Book> => {
    return this.bookModel.create({ title: 'Title', author: 'Author' });
  };
}
