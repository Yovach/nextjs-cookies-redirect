"use server";

import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
export async function login(data: FormData) {
  const username = data.get("username");
  if (!username) throw new Error("Missing username");

  cookies().set("auth", username.toString());
  redirect("/profile", RedirectType.push);
}
