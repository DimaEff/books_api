import { Logger } from '@nestjs/common';
import { z } from 'zod';

const logger = new Logger('ConfigValidation');

export const parseOrThrowConfigValidationError = <
  A extends z.ZodRawShape,
  T extends z.ZodObject<A>,
  D extends z.infer<T>,
>(
  schema: T,
  data: D,
): D => {
  const res = schema.safeParse(data);

  // for specification of types
  if (res.success === false) {
    logger.error(res.error, new Error().stack);
    return;
  }

  return data;
};
