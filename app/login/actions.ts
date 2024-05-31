"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const supabase = createSupabaseServerClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);

    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/personal");
}

export async function signup(formData: FormData) {
  const supabase = createSupabaseServerClient();

  const data = {
    // name: formData.get("firstname") as string,
    // display_name: formData.get("firstname") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  console.log(data);

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);

    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/personal");
}
