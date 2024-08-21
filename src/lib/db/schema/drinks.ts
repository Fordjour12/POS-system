import { relations } from "drizzle-orm";
import { boolean, integer, numeric, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import category from "./category";

// TODO: change name to menuItems 
export const drinksItem = pgTable("drinks", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 150 }),
    price: numeric("price", { precision: 10, scale: 2 }),
    image: text("image"),
    description: text("description"),
    isAcholic: boolean("is_acholic"),
    category_id: integer("category_id"),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
})


export const drinksItemRelations = relations(drinksItem, ({ one }) => ({
    category: one(category, {
        fields: [drinksItem.category_id],
        references: [category.id],
    }),
}))



