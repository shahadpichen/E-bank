"use client";

import React from "react";
import Link from "next/link";
import useUser from "@/app/hook/useUser";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { redirect } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Profile() {
  const { isFetching, data } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();

  const pathname = usePathname();

  if (isFetching) {
    return <></>;
  }

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
    // redirect("/");
    router.push("/");
  };

  return (
    <div>
      {!data?.id ? (
        <>
          <Image
            src={data?.image_url || ""}
            alt={data?.display_name || ""}
            width={50}
            height={50}
            className=" rounded-full  animate-fade ring-2 cursor-pointer"
          />
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <>
              {data?.image_url ? (
                <Image
                  src={data.image_url || ""}
                  alt={data.display_name || ""}
                  width={50}
                  height={50}
                  className=" rounded-full animate-fade ring-2 cursor-pointer"
                />
              ) : (
                <div className="h-[50px] w-[50px] flex items-center justify-center ring-2 rounded-full text-2xl font-bold cursor-pointer">
                  <h1>{data.email[0].toUpperCase()}</h1>
                </div>
              )}
            </>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{data.display_name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
