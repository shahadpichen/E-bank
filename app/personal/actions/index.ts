"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export async function AddToTransactions(
  type: string,
  owner: string | null | undefined,
  recipient: string | null | undefined,
  money: number
) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("transactions")
    .insert({ type, owner, recipient, money })
    .single();
  revalidatePath("/personal");
  return JSON.stringify(result);
}

export async function RequestLoans(
  type: string,
  owner: string | null | undefined,
  money: number
) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("transactions")
    .insert({ type, owner, money })
    .single();
  revalidatePath("/personal");
  return JSON.stringify(result);
}

export async function readTransaction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return await supabase.from("transactions").select("*");
}

export async function deleteAccount(id: string) {
  console.log("id", id);
  const supabase = await createSupabaseServerClient();
  await supabase.from("profiles").delete().eq("id", id);
  revalidatePath("/personal");
}
