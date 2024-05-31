import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="section border-b-2 border-gray-700 text-white font-semibold text-center pt-[30vh] pb-[10vh]">
      <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="mb-24">
          <h3 className="text-6xl">
            The best day to join E-bank was one
            <br /> year ago. The second best is today!
          </h3>
        </div>

        <div className="flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 py-4 px-8"
          >
            <span>
              <Link href="/login"> Open your free account today! </Link>
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
}

export default Footer;
