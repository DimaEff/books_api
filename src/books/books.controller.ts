import { ZodValidationPipe } from '@/common/zodValidationPipe';
import { BooksService } from '@/books/books.service';
import {
  PaginationDto,
  intPrimitive,
  paginationSchema,
  IntPrimitive,
} from '@/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';
import { CreateBookDto, createBookSchema } from '@/books/dto/create-book.dto';
import { UpdateBookDto, updateBookSchema } from '@/books/dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @UsePipes(new ZodValidationPipe(paginationSchema))
  createBook(@Query() query: PaginationDto) {
    return this.booksService.getAllBooks(query);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createBookSchema))
  addBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.addBook(createBookDto);
  }

  @Put(':id')
  updateBook(
    @Param('id', new ZodValidationPipe(intPrimitive)) id: IntPrimitive,
    @Body(new ZodValidationPipe(updateBookSchema)) updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  deleteBook(
    @Param('id', new ZodValidationPipe(intPrimitive)) id: IntPrimitive,
  ) {
    return this.booksService.deleteBook(id);
  }
}
