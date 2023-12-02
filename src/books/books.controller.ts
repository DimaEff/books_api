import { BooksService } from '@/books/books.service';
import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  createBook() {
    return this.booksService.addBook();
  }
}
