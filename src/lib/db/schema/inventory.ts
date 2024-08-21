// import { relations } from "drizzle-orm";
// import { boolean, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// export const inventoryItems = pgTable("inventory_items", {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 100 }).notNull(),
//     descriptiton: text("description"),
//     price: integer("price").notNull(),
//     isAlcoholic: boolean("is_alcoholic"),
// });

// /**
//  * Categories
//  * This table is used to categorize inventory items (e.g., Food, Drinks, Cleaning Supplies).* 
//  */

// export const inventoryCategory = pgTable("inventory_category", {
//     id: serial("id").primaryKey(),
//     inventoryCategoryName: varchar("inventory_category_name", { length: 100 }).notNull(),
// })

// export const inventory = pgTable("inventory", {
//     inventoryId: serial("bar_inventory_id").primaryKey(),
//     itemId: integer("item_id").notNull().references(() => inventoryItems.id),
//     quantity: integer("quantity").notNull(),
//     reorderLevel: integer("reorder_level"),
//     currentLevel: integer("current_level"),
//     lastRestocked: timestamp("last_restocked"),
// });

// /**
//  * InventoryTransactions
//  * This table keeps track of inventory movements, such as items being received, used, or adjusted.
//  */
// export const inventoryTransactions = pgTable("inventory_transactions", {
//     transactionId: serial("transaction_id").primaryKey(),
//     inventoryId: integer("inventory_id").notNull().references(() => inventory.inventoryId),
//     transactionType: varchar("transaction_type", { length: 50 }).notNull(),
//     quantity: integer("quantity").notNull(),
//     transactionDate: timestamp("transaction_date").defaultNow(),
// });


// export const inventoryRelations = relations(inventory, ({ one }) => ({
//     item: one(inventoryItems, {
//         fields: [inventory.itemId],
//         references: [inventoryItems.id],
//     }),
// }));


