// import { relations } from "drizzle-orm";
// import { integer, numeric, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
// import { customer } from "./customer";
// import { menu } from "./menu";


// export const orders = pgTable("orders", {
//     id: serial("id").primaryKey(),
//     customer: text("customer_name"),
//     order_date: timestamp("order_date", { mode: "string" }).notNull().defaultNow(),
//     status: varchar("status", { length: 50 }).default("pending"),
//     total_amount: numeric("total_amount", { precision: 10, scale: 2 }),
//     createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
//     updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),

// });


// export const orderDetails = pgTable("order_details", {
//     id: serial("id").primaryKey(),
//     orderId: integer("order_id").notNull().references(() => orders.id),
//     itemId: integer("item_id").notNull().references(() => menu.id),
//     quantity: integer("quantity").notNull(),
//     itemPrice: numeric("item_price", { precision: 10, scale: 2 }).notNull(),
// });

// export const orderDetailsRelations = relations(orderDetails, ({ one }) => ({
//     order: one(orders, {
//         fields: [orderDetails.orderId],
//         references: [orders.id],
//     }),
//     menu: one(menu, {
//         fields: [orderDetails.itemId],
//         references: [menu.id],
//     }),
// }));


// export const orderRelations = relations(orders, ({ one }) => ({
//     customer: one(customer, {
//         fields: [orders.customer],
//         references: [customer.name],
//     }),
// }));