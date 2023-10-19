import { cookies } from "next/headers";

export default async function Page() {
  const username = cookies().get("username-ok")?.value ?? "world";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello {username}</h1>
    </main>
  );
}
