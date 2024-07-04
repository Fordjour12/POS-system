import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const customer = pgTable("customer", {
    id: serial("id").primaryKey(),
    name: varchar("first_name", { length: 100 }),
    email: text("email"), // Assuming email doesn't need a varchar length
    created_at: timestamp("created_at",),
    updated_at: timestamp("updated_at",),
});