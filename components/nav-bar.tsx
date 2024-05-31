"use client";

import React from "react";
import Profile from "./profile";
import useUser from "@/app/hook/useUser";

function NavBar() {
  const { isFetching, data } = useUser();

  if (isFetching) {
    return <></>;
  }
  return (
    <section className="w-full flex justify-between px-20 h-[10vh] bg-black items-end">
      {data?.id ? (
        <h1 className="text-2xl">
          Welcome Back{" "}
          <span className="font-semibold text-4xl">{data.display_name}!</span>{" "}
        </h1>
      ) : (
        <></>
      )}

      <Profile />
    </section>
  );
}

export default NavBar;
