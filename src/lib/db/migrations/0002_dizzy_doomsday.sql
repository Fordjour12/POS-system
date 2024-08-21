CREATE TABLE IF NOT EXISTS "menuItem" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(150),
	"price" numeric(10, 2),
	"image" text,
	"description" text,
	"category_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
