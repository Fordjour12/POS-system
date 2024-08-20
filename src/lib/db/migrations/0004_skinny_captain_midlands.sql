CREATE TABLE IF NOT EXISTS "customer" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(100),
	"email" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_name" integer,
	"order_date" timestamp,
	"status" varchar(50) DEFAULT 'fulfilled',
	"total_amount" numeric(10, 2),
	"created_at" timestamp,
	"updated_at" timestamp
);
