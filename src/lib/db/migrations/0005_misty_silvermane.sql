ALTER TABLE "customer" ADD COLUMN "name" varchar(100);--> statement-breakpoint
ALTER TABLE "customer" DROP COLUMN IF EXISTS "first_name";