import { z } from 'zod';

export const formSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
  role: z.string().min(3)
});

export type FormSchema = typeof formSchema
