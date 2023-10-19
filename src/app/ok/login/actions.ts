"use server";

import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
export async function loginOk(data: FormData) {
  const username = data.get("username-ok");

  if (username) {
    cookies().set("username-ok", username.toString());
  }
  redirect("/ok/profile", RedirectType.replace);
}
