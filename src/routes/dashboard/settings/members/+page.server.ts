import { type Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import db from "@/db/index"
import { workers } from "@/db/schema"

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
    workers: getWorkers
  }
}


export const actions = {
  default: async (event) => {

    return {
      message: "Hello there form memebers page"
    }
  }
} satisfies Actions
