import db from "@/db/index"
import { workers } from "@/db/schema"
import { error, fail, redirect, type Actions } from "@sveltejs/kit"
import { eq } from "drizzle-orm"
import { Argon2id } from "oslo/password"
import { setError, superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import type { PageServerLoad } from "./$types"
import { registerSchema } from "./schema"

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(registerSchema))
  }
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(registerSchema))
    if (!form.valid) {
      return fail(400, {
        form,
      })
    }

    const { username, password } = form.data

    const workerExists = await db.select({ username: workers.username }).from(workers).where(eq(workers.username, username))

    if (workerExists.length === 1) {
      return setError(form, "username", "Username does exist")
    }

    const hashPassword = await new Argon2id().hash(password)

    const createWorker = await db.insert(workers).values({
      username: username,
      password: hashPassword,
      role: "admin"
    }).returning({ insertedId: workers.id })

    if (createWorker.length !== 1) {
      return error(400, "Failed to create worker")
    } else {

      event.cookies.set("session", String(createWorker[0].insertedId), {
        path: "/",
        sameSite: "lax",
        httpOnly: true,
        secure: true
      })

      redirect(304, "/dashboard")
    }
  }
} satisfies Actions
