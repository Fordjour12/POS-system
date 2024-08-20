CREATE TABLE IF NOT EXISTS "food" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(150),
	"price" numeric(10, 2),
	"image" text,
	"description" text,
	"category_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
