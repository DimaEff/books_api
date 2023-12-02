import { parseOrThrowConfigValidationError } from '@/config/utils';
import { registerAs } from '@nestjs/config';
import { z } from 'zod';

const databaseEnvSchema = z.object({
  DB_USERNAME: z.string(),
  DB_HOST: z.string(),
  DB_NAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.number(),
});

export default registerAs('database', () =>
  parseOrThrowConfigValidationError(databaseEnvSchema, {
    DB_USERNAME: process.env.DB_USERNAME,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: parseInt(process.env.DB_PORT),
  }),
);
