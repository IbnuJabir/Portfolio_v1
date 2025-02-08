import React from "react";
import Link from "next/link";
import { Github, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import MorphingText from "@/components/ui/morphing-text";
import { FaTelegram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.png";

const texts = [
  "Fullstack Developer",
  "Frontend Developer",
  "Software Engineer",
];

function About() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 justify-between items-start md:px-16 px-6">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex flex-col gap-1 justify-start items-center md:items-start md:justify-start px-2">
        <div className="w-full flex items-center justify-center gap-8">
          <Link href="/" className="cursor-pointe md:hidden">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="text-blue-500 w-11 h-11"
            />
          </Link>
          <div className="w-1/2 md:w-full">
            <h1 className="font-changa text-3xl md:text-4xl font-bold z-10 text-left text-gray-900 dark:text-white">
              Kedir Jabir
            </h1>
            <MorphingText
              texts={texts}
              className="text-gray-700 dark:text-gray-300 text-left"
            />
          </div>
        </div>

        <div className="w-full flex gap-4 md:gap-5 items-center justify-center md:justify-start md:items-center mt-12">
          <Link
            target="_blank"
            href="mailto:kedirjabir12@gmail.com"
            className="cursor-pointer group"
          >
            <Mail className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-red-500 group-hover:scale-125" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/IbnuJabir"
            className="cursor-pointer group"
          >
            <Github className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-gray-800 dark:group-hover:text-gray-400 group-hover:scale-125" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ibnu-jabir/"
            className="cursor-pointer group"
          >
            <FaLinkedin className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-blue-600 group-hover:scale-125" />
          </Link>
          <Link
            target="_blank"
            href="https://x.com/Ibnu_J1"
            className="cursor-pointer group"
          >
            <BsTwitterX className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-black dark:group-hover:text-gray-200 group-hover:scale-125" />
          </Link>
          <Link
            target="_blank"
            href="https://t.me/Ibnu_Jabir1"
            className="cursor-pointer group"
          >
            <FaTelegram className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-blue-500 group-hover:scale-125" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ibnujabir42/"
            className="cursor-pointer group"
          >
            <Instagram className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-pink-500 group-hover:scale-125" />
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
