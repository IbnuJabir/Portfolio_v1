"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  time: string;
  company: string;
  title: string;
  content: React.ReactNode;
  skills: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setContainerHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="w-full mx-auto py-8 px-0 pt-20">
        <h2 className="text-lg md:text-4xl w-full text-left font-changa">
          Experiences
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 font-play">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center pt-10 md:pt-2 md:gap-10 group mt-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-[45%] transform -translate-y-1/2 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute -left-12 md:left-3 w-10 md:top-48 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 mt-40">
                {item.time}
              </h3>
            </div>

            <div className="relative group block p-2 h-full w-full">
              {/* <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-300 dark:bg-slate-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.2 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  />
                )}
              </AnimatePresence> */}

              <motion.div
                className="relative flex flex-col p-4 rounded-2xl bg-white dark:bg-transparent shadow-lg border border-transparent group-hover:border-blue-500 transition-all"
                layout
                initial={{ opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                exit={{ opacity: 0.5, y: 10, transition: { duration: 0.3 } }}
              >
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.time}
                </h3>
                <h3 className="text-lg md:text-2xl font-bold text-black dark:text-[#64ffda]">
                  {item.title}
                </h3>
                <p className="text-sm italic text-gray-400 font-mono">
                  {item.company}
                </p>
                <div className="mt-4 text-neutral-300 font-lexend">
                  {item.content}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium dark:text-[#64ffda] dark:bg-[#112240] bg-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}

        <div
          className="absolute md:left-8 -left-7 top-0 overflow-hidden w-[2px] bg-neutral-300 dark:bg-neutral-700"
          style={{ height: containerHeight }}
        >
          <motion.div
            style={{ height: lineHeight }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
