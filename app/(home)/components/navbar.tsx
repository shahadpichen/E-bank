"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import React from "react";

function Navbar() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOperations = () => {
    const featuresSection = document.getElementById("operations-section");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center h-24 w-full px-24 z-50">
      <div>
        <h1 className="text-2xl font-bold text-white">E-Bank</h1>
      </div>
      <ul className="flex items-center list-none">
        <li className="ml-16">
          <a
            className="text-md font-normal text-white hover:text-gray-300"
            onClick={scrollToFeatures}
            href="#"
          >
            Features
          </a>
        </li>
        <li className="ml-16">
          <a
            className="text-md font-normal text-white hover:text-gray-300"
            onClick={scrollToOperations}
            href="#"
          >
            Operations
          </a>
        </li>

        <li className="ml-16">
          <Link href="/login" className="flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Sign in</span>
            </HoverBorderGradient>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
