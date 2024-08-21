import { z } from 'zod';

export const drinksItemSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  price: z.number().min(0),
  image: z.string().min(3),
  is_alcoholic: z.boolean(),
  category_id: z.number().int().positive(),
});

export type DrinksItemSchema = typeof drinksItemSchema
