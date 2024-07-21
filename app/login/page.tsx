import { redirect } from "next/navigation";
import { login, signup } from "./actions";
import { Form } from "./components/form";
import readUserSession from "@/lib/actions";

export default async function LoginPage() {
  const { data } = await readUserSession();

  // if (data.session) {
  //   return redirect("/personal");
  // }
  return (
    <main className="bg-black h-screen flex justify-center items-center">
      <h1 className="fixed top-2 left-2 text-center text-zinc-500">
        Note:- email:testor@gmail.com <br></br> password:1234567 <br></br> OR{" "}
        <br></br>
        email:testor2@gmail.com <br></br> password:123
      </h1>
      <Form />
    </main>
  );
}
