import { workers } from "@/db/schema";
import { redirect, type Handle } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import db from "./lib/db";

export const handle: Handle = async ({ event, resolve }) => {

  let isThereAdmin;

  try {
    isThereAdmin = await db.select({
      field1: workers.role
    }).from(workers).where(eq(workers.role, "admin"));
  } catch (error) {
    console.error('Database query failed:', error);
    return new Response('Internal Server Error', { status: 500 });
  }

  const adminExists = isThereAdmin.length > 0;
  const isLoginPage = event.url.pathname === "/auth/login";
  const isRegisterPage = event.url.pathname === "/auth/register";
  const isDashboardPage = event.url.pathname === "/dashboard";
  const localsSession = "sessions=here"
  //jlkevent.locals.session; // Assuming you have session management

  if (!adminExists && !isRegisterPage) {
    // No admin exists, and not on register page, redirect to register
    return redirect(302, "/auth/register");
  }

  if (adminExists && isRegisterPage) {
    // Admin exists, but trying to access register page, redirect to login
    return redirect(302, "/auth/login");
  }

  if (isLoginPage && localsSession) {
    // User is trying to access login page but is already logged in
    return redirect(302, "/dashboard");
  }

  if (isDashboardPage && !localsSession) {
    // User is trying to access dashboard but is not logged in
    return redirect(302, "/auth/login");
  }

  // Default behavior
  return (await resolve(event))

  // let getSession = event.cookies.get("session")
  // let localsSession = event.locals.session

  // localsSession = getSession

  // // const isThereAdmin = await db.select({
  // //     field1: workers.role
  // // }).from(workers).where(eq(workers.role, "admin"))

  // // // console.log(isThereAdmin.length)

  // // if (isThereAdmin !== "admin") {
  // //     redirect(302, "/auth/register")
  // // } else {

  // if (event.url.pathname === "/auth/login" && localsSession) {
  //     redirect(302, "/dashboard")
  // }

  // if (event.url.pathname === "/dashboard" && !localsSession) {
  //     redirect(302, "/auth/login")
  // }
  // // }
  // return (await resolve(event))
}
