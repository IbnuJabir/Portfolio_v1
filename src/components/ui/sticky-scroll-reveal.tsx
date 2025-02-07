"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Globe } from "lucide-react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    techStack: string[]; // Added Tech Stack as an array
    content?: React.ReactNode;
    website?: string;
    Github?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        return distance < Math.abs(latest - cardsBreakpoints[acc])
          ? index
          : acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Background Colors & Gradients
  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[28rem] w-full overflow-y-auto scroll-m-0  flex justify-center relative space-x-10 rounded-md py-10 "
      ref={ref}
    >
      {/* Left Section: Project Titles & Descriptions */}
      <div className="relative flex items-start px-4 gap-8">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl md:text-3xl font-bold text-[#3bd6b2]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-sm md:text-xl  max-w-sm mt-4"
              >
                {item.description}
              </motion.p>
              {/* Tech Stack Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="flex flex-wrap gap-2 max-w-sm mt-4"
              >
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
              {/* website and github source badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="flex flex-wrap gap-2 max-w-sm mt-4"
              >
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    className="cursor-pointer flex items-center justify-center gap-2 px-3 py-1 text-xs font-medium text-white dark:text-black dark:bg-white bg-black rounded-full dark:hover:bg-gray-100 hover:bg-gray-700"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                )}
                {item.Github && (
                  <a
                    href={item.Github}
                    target="_blank"
                    className="cursor-pointer flex items-center justify-center gap-2 px-3 py-1 text-xs font-medium text-white dark:text-black dark:bg-white bg-black rounded-full dark:hover:bg-gray-100 hover:bg-gray-700"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                )}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right Section: Project Preview (Image or Video) */}
      {/* <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div> */}
      <div
        style={{
          background: backgroundGradient,
          width: "355px",
          height: "300px",
        }}
        className={cn(
          "hidden lg:block rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
