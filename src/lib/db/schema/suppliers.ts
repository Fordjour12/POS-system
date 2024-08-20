// import { pgTable, serial, varchar,integer } from "drizzle-orm/pg-core";

// export const suppliers = pgTable("suppliers", {
//     supplierId: serial("supplier_id").primaryKey(),
//     supplierName: varchar("supplier_name", { length: 100 }).notNull(),
//     contactName: varchar("contact_name", { length: 100 }),
//     contactPhone: varchar("contact_phone", { length: 50 }),
//     contactEmail: varchar("contact_email", { length: 100 }),
// });

// // import { pgTable, integer } from "drizzle-orm/pg-core";
// // import { barInventory } from "./inventory"; // Assuming you have a barInventory table defined
// // import { suppliers } from "./suppliers"; // Assuming you have a suppliers table defined

// export const inventorySuppliers = pgTable("inventory_suppliers", {
//     inventoryId: integer("inventory_id").notNull().references(() => ),
//     supplierId: integer("supplier_id").notNull().references(() => suppliers.supplierId),
// }, (table) => ({
//     pk: table.primaryKey("inventory_id", "supplier_id"),
// }));

// export const inventorySuppliersRelations = relations(inventorySuppliers, ({ one }) => ({
//     inventory: one(barInventory, {
//         fields: [inventorySuppliers.inventoryId],
//         references: [barInventory.barInventoryId],
//     }),
//     supplier: one(suppliers, {
//         fields: [inventorySuppliers.supplierId],
//         references: [suppliers.supplierId],
//     }),
// }));