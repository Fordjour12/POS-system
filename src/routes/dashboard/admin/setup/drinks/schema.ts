import { z } from 'zod';

export const mealItemSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  price: z.number().min(0),
  image: z.string().min(3),
  category_id: z.number().int().positive(),
});

export type MealItemSchema = typeof mealItemSchema
