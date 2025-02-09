import React from "react";
import { OrbitingCircles } from "./ui/orbiting-circles";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useWindowSize } from "react-haiku";

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
];

function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  const { width } = useWindowSize(); // Get current window width

  const isMobile = width < 768;

  const orbitConfig = isMobile
    ? { radii: [40, 70, 100, 130, 160], iconSize: 20 }
    : { radii: [80, 120, 160, 200, 240], iconSize: 40 };
  return (
    <div className="w-full h-full">
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <span className="font-changa pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Skills
        </span>

        {orbitConfig.radii.map((radius, orbitIndex) => (
          <OrbitingCircles
            key={radius}
            iconSize={orbitConfig.iconSize}
            radius={radius}
            reverse={orbitIndex % 2 === 1}
            speed={1}
            slugs={slugs}
          >
            {images
              .slice(orbitIndex * 4, (orbitIndex + 1) * 4)
              .map((imgSrc, index) => (
                <TooltipProvider key={index + orbitIndex * 4}>
                  <Tooltip>
                    <TooltipTrigger>
                      <img
                        src={imgSrc}
                        alt={slugs[index + orbitIndex * 4]}
                        className="w-8 h-8 transition-transform duration-300 ease-in-out hover:rotate-45"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      {slugs[index + orbitIndex * 4]}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
          </OrbitingCircles>
        ))}
      </div>
    </div>
  );
}

export default Skills;
