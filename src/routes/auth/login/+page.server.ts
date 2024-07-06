import db from "@/db/index"
import { workers } from "@/db/schema"
import { fail, redirect, type Actions } from "@sveltejs/kit"
import { eq } from "drizzle-orm"
import { Argon2id } from "oslo/password"
import { setError, superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import type { PageServerLoad } from "./$types"
import { loginSchema } from "./schema"

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginSchema))
  }
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(loginSchema))
    if (!form.valid) {
      return fail(400, {
        form,
      })
    }

    const { username, password } = form.data

    const workerExists = await db.select({
      username: workers.username,
      password: workers.password
    }).from(workers).where(eq(workers.username, username))


    if (workerExists.length !== 1) {
      return setError(form, "username", "Username does exist")
    }


    const validatePassword = await new Argon2id().verify(workerExists[0].password, password)
    if (!validatePassword) {
      return fail(400, {
        form: setError(form, "password", "Password is incorrect")
      })
    }

    redirect(302, "/dashboard")

    // return redirect(302, "/dashboard")

    // return {
    //   form,
    // }
  }
} satisfies Actions
