CREATE TABLE IF NOT EXISTS "drinks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(150),
	"price" numeric(10, 2),
	"image" text,
	"description" text,
	"is_acholic" boolean,
	"category_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
