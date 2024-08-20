import db from "@/db/index";
import { workers } from "@/db/schema";
import type { Actions } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async (event) => {

    console.log(event.locals.userId)


};

export const actions: Actions = {
    default: async ({ locals }) => {

        console.log("kitactions", locals.userId)
        const password = "password";


        const updatePassword = await db.update(workers).set({ password: password }).where(eq(workers.id, locals.userId))

    }

};