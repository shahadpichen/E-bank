import React from "react";
import Personal from "./components/personal";
import { redirect } from "next/navigation";
import readUserSession from "@/lib/actions";
import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/toaster";
// Import the Transaction type

import { readTransaction } from "./actions";
import useUser from "../hook/useUser";
import { Transaction } from "../types";

async function page() {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/");
  }

  const { data: transactions } = await readTransaction();

  const safeTransactions: Transaction[] = transactions || [];

  return (
    <>
      <NavBar />
      <Personal transactions={safeTransactions} />
      <Toaster />
    </>
  );
}

export default page;
