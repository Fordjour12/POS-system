import db, { queryClient } from "."
import config from "../../../drizzle.config"
import { migrate } from "drizzle-orm/postgres-js/migrator"

await migrate(db, { migrationsFolder: config.out! })
await queryClient.end()

