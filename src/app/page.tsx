import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { About, ContactMe, Hero, Projects, Skills } from "@/containers";
import { Header } from "@/ui";

export default function Page() {
  return (
    <div
      className="bg-[#0f1c2e] font-mono text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-[#0f1c2e] scrollbar-thumb-[#64ffda]/80"
    >
      <Header />
      <section id="home" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <section
        id="info"
        className="snap-end flex flex-col items-center justify-end pb-20"
      >
        <p className="text-sm md:text-left xl:text-[12.5px] text-[#8892b0]">
          Built and designed by Ayush Raj.{" "}
        </p>
        <p className="text-sm md:text-left xl:text-[12.5px] text-[#8892b0]">
          All rights reserved. ©
        </p>
      </section>

      <a href="#home">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeIcon className="w-6 h-6 hover:text-[#64ffda] " />
          </div>
        </footer>
      </a>
    </div>
  );
}
