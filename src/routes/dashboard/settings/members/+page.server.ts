import { type Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import db from "@/db/index"
import { workers } from "@/db/schema"
import { fail, superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import { formSchema } from "./schema"

export const load: PageServerLoad = async () => {
  const getWorkers = await db.select(
    {
      id: workers.id,
      username: workers.username,
      role: workers.role
    }
  ).from(workers)

  console.log("testing workers", getWorkers)


  return {
    form: await superValidate(zod(formSchema)),
    workers: getWorkers
  }
}


export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema))
    if (!form.valid) {
      return fail(400, {
        form,
      })
    }

    const { username, password, role } = form.data

    console.log("testing form data", username, password, role)
    return {
      form,
    }
  }
} satisfies Actions
