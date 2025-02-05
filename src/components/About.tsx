import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MorphingText from "@/components/ui/morphing-text";

const texts = [
  "Fullstack Developer",
  "Frontend Developer",
  "Software Engineer",
];

function About() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 justify-between items-start md:px-16 px-6">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex flex-col gap-1 justify-start items-start px-2">
        <h1 className="text-3xl md:text-4xl font-bold z-10 m-0 text-left text-gray-900 dark:text-white">
          Kedir Jabir
        </h1>
        <MorphingText
          texts={texts}
          className="text-left text-gray-700 dark:text-gray-300"
        />

        <div className="w-full flex gap-4 md:gap-8 items-center justify-start mt-12">
          <Link
            target="_blank"
            href="mailto:kedirjabir12@gmail.com"
            className="cursor-pointer"
          >
            <Mail className="text-gray-900 dark:text-gray-300 size-5 md:size-7" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/IbnuJabir"
            className="cursor-pointer"
          >
            <Github className="text-gray-900 dark:text-gray-300 size-5 md:size-7" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ibnu-jabir/"
            className="cursor-pointer"
          >
            <Linkedin className="text-gray-900 dark:text-gray-300 size-5 md:size-7" />
          </Link>
          <Link
            target="_blank"
            href="https://x.com/Ibnu_J1"
            className="cursor-pointer"
          >
            <X className="text-gray-900 dark:text-gray-300 size-5 md:size-7" />
          </Link>
          <Link
            target="_blank"
            href="https://t.me/Ibnu_Jabir1"
            className="cursor-pointer"
          >
            <Send className="text-gray-900 dark:text-gray-300 size-5 md:size-7" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ibnujabir42/"
            className="cursor-pointer"
          >
            <Instagram className="text-gray-900 dark:text-gray-300 size-5 md:size-7" />
          </Link>
        </div>

        <Link href="https://kedir-jabir.tiiny.site" target="_blank">
          <Button className="bg-green-700 text-white hover:bg-green-500 rounded-sm border-none mt-4">
            Open Resume
          </Button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 flex flex-col gap-4 font- dark:text-gray-300 text-gray-900">
        <p className="text-lg">
          I am a{" "}
          <strong className="text-blue-600 dark:text-blue-400">
            results-driven Full Stack Developer
          </strong>{" "}
          with a passion for building high-performance, scalable, and
          user-centric applications. With a strong foundation in both frontend
          and backend development, I specialize in crafting seamless digital
          experiences that balance aesthetics with efficiency.
        </p>

        <p className="mt-4 text-lg">
          Currently, I contribute as a{" "}
          <strong className="text-blue-600 dark:text-blue-400">
            Full Stack Developer
          </strong>
          , engineering robust solutions that enhance user engagement and
          optimize system performance. My expertise spans across designing
          intuitive interfaces, developing efficient APIs, and architecting
          scalable infrastructures.
        </p>

        <p className="mt-4 text-lg">
          Over the years, I have led and contributed to numerous projects,
          ensuring high standards in performance, security, and maintainability.
          My approach focuses on{" "}
          <strong className="text-green-600 dark:text-green-400">
            clean code, strategic problem-solving, and innovation
          </strong>
          , allowing businesses to scale efficiently and deliver exceptional
          digital products.
        </p>

        <p className="mt-4 text-lg">
          Beyond development, I am deeply involved in mentoring, open-source
          contributions, and staying ahead of emerging technologies. My goal is
          to push boundaries, refine digital experiences, and create
          <strong className="text-blue-600 dark:text-blue-400">
            {" "}
            meaningful impact through technology
          </strong>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
