import { db } from "@/db/index"
import { category, menuItem } from "@/db/schema"
import { type Actions } from "@sveltejs/kit"
import { fail, superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import type { PageServerLoad } from "./$types"
import { mealItemSchema } from "./schema"

export const load: PageServerLoad = async () => {
  const getCategories = await db.select().from(category)

  return {
    form: await superValidate(zod(mealItemSchema)),
    categories: getCategories
  }
}


export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(mealItemSchema))
    if (!form.valid) {
      return fail(400, {
        form,
      })
    }

    const { name, description, image, price, category_id } = form.data

    const createMeal = await db.insert(menuItem).values({
      name: name,
      description: description,
      image: image,
      price: String(price),
      category_id: category_id
    }).returning({ insertedId: menuItem.id })

    console.log("testing the form data", name, description, image, price, category_id)

    return {
      form,
    }
  }
} satisfies Actions
