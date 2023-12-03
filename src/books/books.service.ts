import { CreateBookDto } from '@/books/dto/create-book.dto';
import { UpdateBookDto } from '@/books/dto/update-book.dto';
import { Book } from '@/books/models/book.model';
import {
  PAGINATION_PAGE_NUMBER,
  PAGINATION_PAGE_SIZE,
  PaginationDto,
} from '@/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private readonly bookModel: typeof Book,
  ) {}

  public readonly getAllBooks = (pagination: PaginationDto) => {
    const limit = pagination.limit ?? PAGINATION_PAGE_SIZE;
    const offset = limit * (pagination.page ?? PAGINATION_PAGE_NUMBER);
    return this.bookModel.findAndCountAll({
      limit,
      offset,
    });
  };

  public readonly getBookById = async (id: number): Promise<Book> => {
    const book = await this.bookModel.findByPk(id);
    if (book === null) {
      throw new NotFoundException(`The book with id ${id} does not exist`);
    }

    return book;
  };

  public readonly addBook = async (
    createBookDto: CreateBookDto,
  ): Promise<Book> => this.bookModel.create({ ...createBookDto });

  public readonly updateBook = async (
    id: number,
    updateBookDto: UpdateBookDto,
  ) => {
    const book = await this.getBookById(id);
    book.setAttributes(updateBookDto);
    const savedBook = await book.save();
    return savedBook;
  };

  public readonly deleteBook = async (id: number): Promise<void> => {
    const book = await this.getBookById(id);
    await book.destroy();
  };
}
