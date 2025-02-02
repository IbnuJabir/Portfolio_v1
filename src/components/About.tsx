import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, X } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import MorphingText from "@/components/ui/morphing-text";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const texts = [
  "Fullstack Developer",
  "Frontend Developer",
  "Software Engineer",
];
function About() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 justify-between items-start md:px-16 px-6">
      <div className="w-full md:w-1/3 flex flex-col gap-1 justify-start items-start px-2">
        <h1 className="text-3xl md:text-4xl font-bold z-10 m-0 text-left">
          Kedir Jabir
        </h1>
        <MorphingText texts={texts} className="text-left" />
        <div className="w-full flex gap-8 items-center justify-start mt-12">
          <Link
            target="_blank"
            href="https://github.com/IbnuJabir"
            className="cursor-pointer"
          >
            <Github />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ibnu-jabir/"
            className="cursor-pointer"
          >
            <Linkedin />
          </Link>
          <Link
            target="_blank"
            href="https://x.com/Ibnu_J1"
            className="cursor-pointer"
          >
            <X />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ibnujabir42/"
            className="cursor-pointer"
          >
            <Instagram />
          </Link>
        </div>
        <Button className="bg-green-700 text-white hover:bg-green-500 rounded-sm border-none  mt-4">
          Open Resume
        </Button>
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <p className="text-xl md:text-xl text-left font-lexend text-gray-800  w-full md:w-[90%] dark:text-accent-foreground">
          I'm a fullstack developer with a passion for building beautiful and
          functional user interfaces. I have experience in building web
          applications using modern technologies like React, Next.js, and
          Tailwind CSS. I'm also interested in learning new technologies and
          tools to improve my skills and knowledge.
        </p>
      </div>
    </div>
  );
}

export default About;
