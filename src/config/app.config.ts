import { parseOrThrowConfigValidationError } from '@/config/utils';
import { registerAs } from '@nestjs/config';
import { z } from 'zod';

const appEnvSchema = z.object({
  PORT: z.number(),
});

export default registerAs('app', () =>
  parseOrThrowConfigValidationError(appEnvSchema, {
    PORT: parseInt(process.env.PORT),
  }),
);
