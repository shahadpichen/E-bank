"use client";

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import {
  BsShieldFillCheck,
  BsFillLockFill,
  BsCreditCard2BackFill,
  BsCurrencyDollar,
} from "react-icons/bs";

function Services() {
  const skills = [
    { text: "Keeping secrecy", Icon: BsShieldFillCheck },
    { text: "Free transaction fee", Icon: BsCurrencyDollar },
    { text: "Security guaranteed", Icon: BsFillLockFill },
    { text: "All in E-bank app", Icon: BsCreditCard2BackFill },
  ];
  return (
    <section className="section max-w-5xl mx-auto px-8 my-[25vh]">
      <HoverEffect items={skills} />
    </section>
  );
}

export default Services;
