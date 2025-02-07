"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
// import MorphingText from "@/components/ui/morphing-text";
import Link from "next/link";
import Experience from "@/components/Experience";
import About from "@/components/About";
// import { Spotlight } from "@/components/ui/spotlight-new";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  const { setTheme } = useTheme();

  const links = [
    {
      title: "About",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },

    {
      title: "Experience",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Skills",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Testimonials",
      icon: <Image src={logo} width={20} height={20} alt="Aceternity Logo" />,
      href: "#testimonials",
    },
    {
      title: "Contact",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
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
      className="w-full overflow-x-hidden flex flex-col justify-between items-center justify-items-center gap-16 py-10"
    >
      <header className="hidden z-10 w-full md:flex items-baseline justify-center md:justify-between align-bottom md:px-16">
        <Link href="/" className="cursor-pointer">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="text-blue-500 w-10 h-10"
          />
        </Link>
      </header>
      {/* <Spotlight /> */}
      <main className="w-full flex flex-col justify-between gap-8 row-start-2 items-center sm:items-start z-10">
        <About />
        <div
          id="experience"
          // className="w-full flex flex-col items-center justify-center gap-8"
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
      </main>
      <footer className="fixed bottom-5 left-0 right-0 row-start-3 flex gap-6 flex-wrap items-center justify-center z-10 ">
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
