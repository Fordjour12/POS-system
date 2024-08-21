import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema/index"

config()

const { DATABASE_URL } = process.env
export const queryClient = postgres(DATABASE_URL, {
	max: (DATABASE_URL.includes("localhost")) ? 1 : 10,
	onnotice(notice) {
		console.log(notice)
	},
})


export const db = drizzle(queryClient, {
	schema,
	logger: true
})


export type db = typeof db

export default db

