"use client";
import {
  ChevronsLeftRightEllipsis,
  Codesandbox,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import Link from "next/link";
import Experience from "@/components/Experience";
import About from "@/components/About";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { IoIosPerson } from "react-icons/io";
import { GoProject } from "react-icons/go";
import Footer from "@/components/Footer";
import { FaPhone } from "react-icons/fa";
export default function Home() {
  const { setTheme } = useTheme();

  const links = [
    {
      title: "About",
      icon: (
        <IoIosPerson className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },

    {
      title: "Experience",
      icon: (
        <Codesandbox className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        // <SquareChartGantt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Projects",
      icon: (
        <GoProject className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <ChevronsLeftRightEllipsis className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    // {
    //   title: "Testimonials",
    //   icon: <Image src={logo} width={20} height={20} alt="Aceternity Logo" />,
    //   href: "#testimonials",
    // },
    {
      title: "Contact",
      icon: (
        <FaPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },

    {
      title: "Theme",
      icon: (
        <Button
          variant="customed"
          size="icon"
          onClick={() =>
            setTheme((theme) => (theme === "dark" ? "light" : "dark"))
          }
          className="z-50 bg-transparent"
        >
          <Sun className="rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
          <Moon className="absolute rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      ),
    },
  ];
  return (
    <div
      id="about"
      className="w-full overflow-x-hidden flex flex-col justify-between items-center justify-items-center gap-16 pt-10"
    >
      <header className="hidden z-10 w-full md:flex items-baseline justify-center md:justify-between align-bottom md:px-16">
        <Link href="/" className="cursor-pointer">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="text-blue-500 w-16 h-16"
          />
        </Link>
      </header>
      {/* <Spotlight /> */}
      <main className="w-full flex flex-col justify-between gap-8 row-start-2 items-center sm:items-start z-10">
        <About />
        <div
          id="experience"
          className="w-full flex flex-col items-center justify-center gap-8"
        >
          <Experience />
        </div>
        <div
          id="projects"
          className="w-full flex flex-col items-center justify-center gap-8"
        >
          <Projects />
        </div>
        <div
          id="skills"
          className="w-full flex flex-col items-center justify-center gap-8"
        >
          <Skills />
        </div>
        <div
          id="testimonials"
          className="w-full flex flex-col items-center justify-center gap-8"
        >
          {/* <Testimonials /> */}
        </div>
        <div
          id="contact"
          className="w-full flex flex-col items-center justify-center gap-8"
        >
          <Contact />
        </div>
        <Footer />
      </main>
      <footer className="fixed bottom-10 left-0 right-0 row-start-3 flex gap-6 flex-wrap items-center justify-center z-10 ">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </footer>
      <InteractiveGridPattern
        width={40}
        height={40}
        className={cn(
          "[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-100%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
