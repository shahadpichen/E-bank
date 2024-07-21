"use client";

import React, { useEffect } from "react";
import HeroTitle from "./components/hero-title";
import { Features } from "./components/features";
import { Separator } from "@/components/ui/separator";
import Navbar from "./components/navbar";
import Operations from "./components/operations";
import Footer from "./components/footer";
import Uplifting from "./components/uplifting";
import Services from "./components/services";

function Page() {
  useEffect(() => {
    const allSections = document.querySelectorAll(".section");

    const revealSection = function (entries: any, observer: any) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });

    return () => {
      allSections.forEach(function (section) {
        sectionObserver.unobserve(section);
      });
    };
  }, []);
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroTitle />
      <Uplifting />
      <Features />
      <Services />
      <Operations />
      <Footer />
    </main>
  );
}

export default Page;
