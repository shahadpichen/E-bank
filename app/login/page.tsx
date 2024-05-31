import { redirect } from "next/navigation";
import { login, signup } from "./actions";
import { Form } from "./components/form";
import readUserSession from "@/lib/actions";

export default async function LoginPage() {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect("/personal");
  }
  return (
    <main className="bg-black h-screen flex justify-center items-center">
      {/* <form>
        <label htmlFor="fullname">Name:</label>
        <input id="fullname" name="fullname" type="text" required />
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form> */}
      <Form />
    </main>
  );
}
