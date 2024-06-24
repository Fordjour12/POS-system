import { pgTable, serial, text } from "drizzle-orm/pg-core"

const category = pgTable("category", {
	id: serial("id").primaryKey(),
	name: text("category_name").notNull(),
})

export default category
