import { createBookSchema } from '@/books/dto/create-book.dto';
import { z } from 'zod';

export const updateBookSchema = createBookSchema.partial();
export type UpdateBookDto = z.infer<typeof updateBookSchema>;
