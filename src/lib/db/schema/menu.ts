import { relations } from "drizzle-orm";
import { integer, numeric, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import category from "./category";

// TODO: change name to menuItems 
export const menu = pgTable("menu", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 150 }),
	price: numeric("price", { precision: 10, scale: 2 }),
	image: text("image"),
	description: text("description"),
	category_id: integer("category_id"),
	createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
})


export const menuRelations = relations(menu, ({ one }) => ({
	category: one(category, {
		fields: [menu.category_id],
		references: [category.id],
	}),
}))



