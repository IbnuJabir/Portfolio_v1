import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    time: string;
    company: string;
    title: string;
    content: React.ReactNode;
    skills: string[];
    link?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("py-4 w-full", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex !== null && hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Card Content */}
          <div className="relative p-6 bg-black border border-neutral-700 rounded-2xl shadow-lg group-hover:border-blue-500 transition-all">
            <h3 className="text-lg md:text-2xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-sm italic text-gray-400">{item.company}</p>
            <div className="mt-4 text-neutral-300">{item.content}</div>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
