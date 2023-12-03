import { PAGINATION_PAGE_NUMBER, PAGINATION_PAGE_SIZE } from '@/common';
import {
  MIN_PAGINATION_PAGE_NUMBER,
  MIN_PAGINATION_PAGE_SIZE,
} from '@/common/constants';
import { z } from 'zod';

// todo: fix default values for validation
export const paginationSchema = z.object({
  limit: z.coerce
    .number()
    .int()
    .min(MIN_PAGINATION_PAGE_SIZE)
    .default(PAGINATION_PAGE_SIZE)
    .optional(),
  page: z.coerce
    .number()
    .int()
    .min(MIN_PAGINATION_PAGE_NUMBER)
    .default(PAGINATION_PAGE_NUMBER)
    .optional(),
});

export type PaginationDto = z.infer<typeof paginationSchema>;
