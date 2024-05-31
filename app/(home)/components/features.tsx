"use client";
import React, { useEffect } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "100% digital bank",
    description:
      "Experience banking like never before with our fully digital platform. Say goodbye to traditional banking hassles and embrace seamless, convenient transactions anytime, anywhere.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/card2.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Watch your money grow",
    description:
      "Take control of your finances and witness your wealth flourish over time. With our intuitive tools and expert guidance, investing and saving have never been more rewarding.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/card3.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Free debit card included",
    description:
      "Enjoy the convenience of a free debit card with your account. Make purchases with ease, access ATMs worldwide, and manage your spending effortlessly with our versatile debit card.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/card1.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function Features() {
  return (
    <div id="features-section" className="section mt-[40vh]">
      <div className="mb-20">
        <p className="text-5xl font-semibold text-black text-center dark:text-white">
          Everything you need in a modern bank and more.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%]">
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
}
