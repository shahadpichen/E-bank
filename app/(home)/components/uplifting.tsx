"use client";

import { Vortex } from "@/components/ui/vortex";
import React from "react";

function Uplifting() {
  return (
    <div className="section w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center gap-10 px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
          The Best Banking <br /> service for You
        </h2>
        <div className="flex w-[95vw] justify-center">
          <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
            We are able to assist you in discovering the appropriate payment
            solution for your business. We are able to help regardless of how
            your customers wish to pay.
          </p>
        </div>
      </Vortex>
    </div>
  );
}

export default Uplifting;
