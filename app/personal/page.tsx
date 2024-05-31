import React from "react";
import Personal from "./components/personal";
import { redirect } from "next/navigation";
import readUserSession from "@/lib/actions";
import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/toaster";
import { readTransaction } from "./actions";
import useUser from "../hook/useUser";

async function page() {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/");
  }
  const { data: transactions } = await readTransaction();

  return (
    <>
      <NavBar />
      <Personal transactions={transactions} />
      <Toaster />
    </>
  );
}

export default page;
