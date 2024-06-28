import { relations } from "drizzle-orm";
import { pgTable, text, serial, varchar, timestamp, integer, numeric } from "drizzle-orm/pg-core";
import category from "./category";

export const menu = pgTable("menu", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 150 }),
	price: numeric("price", { precision: 10, scale: 2 }),
	image: text("image"),
	description: text("description"),
	category_id: integer("category_id"),
	created_at: timestamp("created_at"),
	updated_at: timestamp("updated_at"),
})


export const menuRelations = relations(menu, ({ one }) => ({
	category: one(category, {
		fields: [menu.category_id],
		references: [category.id],
	}),
}))



