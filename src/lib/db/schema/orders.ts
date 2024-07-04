import { relations } from "drizzle-orm";
import { integer, numeric, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { customer } from "./customer";

export const orders = pgTable("orders", {
    id: serial("id").primaryKey(),
    customer: integer("customer_name"),
    order_date: timestamp("order_date", { mode: "string" }).notNull().defaultNow(),
    status: varchar("status", { length: 50 }).default("fulfilled"),
    total_amount: numeric("total_amount", { precision: 10, scale: 2 }),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),

});

export const orderRelations = relations(orders, ({ one }) => ({
    customer: one(customer, {
        fields: [orders.customer],
        references: [customer.name],
    }),
}));