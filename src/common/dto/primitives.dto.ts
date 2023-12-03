import { z } from 'zod';

export const numberPrimitive = z.coerce.number();
export type NumberPrimitive = z.infer<typeof numberPrimitive>;
export const intPrimitive = numberPrimitive.int();
export type IntPrimitive = z.infer<typeof intPrimitive>;
export const stringPrimitive = z.string();
export type StringPrimitive = z.infer<typeof stringPrimitive>;
