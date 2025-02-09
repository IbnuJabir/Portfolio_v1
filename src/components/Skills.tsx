"use client";
import React, { useState, useEffect } from "react";
import { OrbitingCircles } from "./ui/orbiting-circles";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "c",
  "c++",
  "express",
  "nextdotjs",
  "react",
  "flask",
  "mysql",
  "mongodb",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "trpc",
  "reactquery",
  "redux",
];

function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const width = windowWidth || 1024; // Default to 1024px during SSR
  const isMobile = width < 768;

  const orbitConfig = isMobile
    ? { radii: [40, 70, 100, 130, 160], iconSize: 20 }
    : { radii: [80, 120, 160, 200, 240], iconSize: 40 };

  const iconCounts = [4, 4, 4, 5, 5]; // Icons per orbit

  let currentIndex = 0;

  return (
    <div className="w-full h-full">
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <span className="font-changa pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Skills
        </span>

        {orbitConfig.radii.map((radius, orbitIndex) => {
          const iconCount = iconCounts[orbitIndex]; // Get icon count for this orbit
          const orbitIcons = images.slice(
            currentIndex,
            currentIndex + iconCount
          );
          currentIndex += iconCount; // Update index for next orbit

          return (
            <OrbitingCircles
              key={radius}
              iconSize={orbitConfig.iconSize}
              radius={radius}
              reverse={orbitIndex % 2 === 1}
              speed={1}
              slugs={slugs}
            >
              {orbitIcons.map((imgSrc, index) => (
                <TooltipProvider key={index + currentIndex}>
                  <Tooltip>
                    <TooltipTrigger>
                      <img
                        src={imgSrc}
                        alt={slugs[index + currentIndex - iconCount]}
                        className="w-8 h-8 transition-transform duration-300 ease-in-out hover:rotate-45"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      {slugs[index + currentIndex - iconCount]}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </OrbitingCircles>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
