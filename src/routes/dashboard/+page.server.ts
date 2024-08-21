import db from "@/db/index";
import { category } from "@/db/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
    const id = url.searchParams.get('category_id')

    const categoryData = await db.select().from(category)
    // const menuData = await db.select().from(menu).where(eq(menu.category_id, Number(id) || 1))


    return {
        categoryData,
        // menuData
        data: "hello from dashboard page"
    }
};
