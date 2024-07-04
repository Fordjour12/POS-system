import { relations } from "drizzle-orm";
import { integer, numeric, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { customer } from "./customer";

export const orders = pgTable("orders", {
    id: serial("id").primaryKey(),
    customer: integer("customer_name"),
    order_date: timestamp("order_date"),
    status: varchar("status", { length: 50 }).default("fulfilled"),
    total_amount: numeric("total_amount", { precision: 10, scale: 2 }),
    created_at: timestamp("created_at"),
    updated_at: timestamp("updated_at"),
});

export const orderRelations = relations(orders, ({ one }) => ({
    customer: one(customer, {
        fields: [orders.customer],
        references: [customer.name],
    }),
}));