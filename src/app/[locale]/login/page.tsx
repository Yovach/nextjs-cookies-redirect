import { login } from "@/app/[locale]/login/actions";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login</h1>
      <form action={login} className="flex flex-col gap-y-2 bg-neutral-800 p-8">
        <label htmlFor="username">Username</label>
        <input id="username" name="username" className="text-black" />
        <button>Submit</button>
      </form>
    </main>
  );
}
