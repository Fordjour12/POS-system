// import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// export const customer = pgTable("customer", {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 100 }),
//     email: text("email"), // Assuming email doesn't need a varchar length
//     createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
//     updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
// });
