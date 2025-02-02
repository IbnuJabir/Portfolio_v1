import React from "react";
import { OrbitingCircles } from "./ui/orbiting-circles";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
];

function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="w-full h-full">
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Skills
        </span>

        {/* First Orbit - 5 Skills */}
        <OrbitingCircles iconSize={40} radius={80}>
          {images.slice(0, 4).map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={slugs[index]}
              className="w-8 h-8"
            />
          ))}
        </OrbitingCircles>

        {/* Second Orbit - Next 5 Skills */}
        <OrbitingCircles iconSize={30} radius={140} reverse speed={2}>
          {images.slice(4, 8).map((imgSrc, index) => (
            <img
              key={index + 5}
              src={imgSrc}
              alt={slugs[index + 5]}
              className="w-8 h-8"
            />
          ))}
        </OrbitingCircles>

        {/* Third Orbit - Next 5 Skills */}
        <OrbitingCircles iconSize={30} radius={200} speed={2}>
          {images.slice(8, 12).map((imgSrc, index) => (
            <img
              key={index + 10}
              src={imgSrc}
              alt={slugs[index + 10]}
              className="w-8 h-8"
            />
          ))}
        </OrbitingCircles>

        {/* Fourth Orbit - Next 5 Skills */}
        <OrbitingCircles iconSize={30} radius={260} reverse speed={2}>
          {images.slice(12, 16).map((imgSrc, index) => (
            <img
              key={index + 15}
              src={imgSrc}
              alt={slugs[index + 15]}
              className="w-8 h-8"
            />
          ))}
        </OrbitingCircles>

        {/* Fifth Orbit - Remaining Skills */}
        <OrbitingCircles iconSize={30} radius={320} speed={2}>
          {images.slice(16, 20).map((imgSrc, index) => (
            <img
              key={index + 20}
              src={imgSrc}
              alt={slugs[index + 20]}
              className="w-8 h-8"
            />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}

export default Skills;
