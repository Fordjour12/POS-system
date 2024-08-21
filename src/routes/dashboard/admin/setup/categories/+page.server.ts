import { db } from "@/db/index"
import { category } from "@/db/schema"
import { type Actions } from "@sveltejs/kit"
import { fail, superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import type { PageServerLoad } from "./$types"
import { categorySchema } from "./schema"

export const load: PageServerLoad = async () => {
  const getCategories = await db.select().from(category)

  return {
    form: await superValidate(zod(categorySchema)),
    categories: getCategories
  }
}


export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(categorySchema))
    if (!form.valid) {
      return fail(400, {
        form,
      })
    }

    const { name, description } = form.data

    const createCategory = await db.insert(category).values({
      name: name,
      description: description
    }).returning({ insertedId: category.id })

    console.log(createCategory)

    return {
      form,
    }
  }
} satisfies Actions
