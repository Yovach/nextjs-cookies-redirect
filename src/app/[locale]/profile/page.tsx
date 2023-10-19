import { getI18n } from "@/locales/server";
import { cookies } from "next/headers";

export default async function Page() {
  const username = cookies().get("username")?.value ?? "world";
  const t = await getI18n();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("profile.title", { name: username })}</h1>
    </main>
  );
}
