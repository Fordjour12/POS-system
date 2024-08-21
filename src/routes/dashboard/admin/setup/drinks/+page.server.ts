import { db } from "@/db/index"
import { category } from "@/db/schema"
import { type Actions } from "@sveltejs/kit"
import { fail, superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import type { PageServerLoad } from "./$types"
import { drinksItemSchema } from "./schema"

export const load: PageServerLoad = async () => {
  const getCategories = await db.select().from(category)

  return {
    form: await superValidate(zod(drinksItemSchema)),
    categories: getCategories
  }
}


export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(drinksItemSchema))
    if (!form.valid) {
      return fail(400, {
        form,
      })
    }

    const { name, description, image, price, category_id } = form.data



    console.log("testing the form data", name, description, image, price, category_id)

    return {
      form,
    }
  }
} satisfies Actions
