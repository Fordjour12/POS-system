import { z } from "zod";

export const registerSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type RegisterSchema = typeof registerSchema;

