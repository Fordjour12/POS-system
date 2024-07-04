import db from "@/db/index";
import { orders } from "@/db/schema";
import { endOfMonth, endOfToday, startOfMonth, startOfToday } from "date-fns";
import { sql } from "drizzle-orm";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {

    const startDay = startOfToday().toISOString();
    const endDay = endOfToday().toISOString();

    const startMonth = startOfMonth(startOfToday()).toISOString();
    const endMonth = endOfMonth(startOfToday()).toISOString();

    console.log("startMonth", startMonth)
    console.log("endMonth", endMonth)

    const today = await db.select({
        total: sql`sum(orders.total_amount)`.as("total"),
    }).from(orders).where(sql`${orders.order_date} >= ${startDay} and ${orders.order_date} <= ${endDay}`);

    const month = await db.select({
        total: sql`sum(orders.total_amount)`.as("total"),
    }).from(orders).where(sql`${orders.order_date} >= ${startMonth} and ${orders.order_date} <= ${endMonth}`);

    const order = await db.select().from(orders)


    return {

        results: {
            today: Number(today[0].total) || 0,
            month: Number(month[0].total) || 0
        },
        order

    }


};