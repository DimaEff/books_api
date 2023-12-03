import { MIN_PUBLISH_YEAR } from '@/books/constants';
import { MIDDLE_STRING_LENGTH, MIN_STRING_LENGTH } from '@/common';
import { z } from 'zod';

export const createBookSchema = z.object({
  title: z.string().min(MIN_STRING_LENGTH).max(MIDDLE_STRING_LENGTH),
  author: z.string().min(MIN_STRING_LENGTH).max(MIDDLE_STRING_LENGTH),
  yearOfPublication: z
    .number()
    .int()
    .min(MIN_PUBLISH_YEAR)
    .max(
      new Date().getFullYear(),
      'Year of publication must be less or equal than the current year',
    ),
});

export type CreateBookDto = z.TypeOf<typeof createBookSchema>;
