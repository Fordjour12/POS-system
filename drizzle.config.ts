import { defineConfig } from 'drizzle-kit'
import { config } from "dotenv"

config()

const { DATABASE_URL } = process.env

export default defineConfig({
	schema: "./src/lib/db/schema/index.ts",
	out: "./src/lib/db/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: DATABASE_URL,
	},
	verbose: true,
	strict: true,
});
