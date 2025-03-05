"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import zad from "@/assets/zad.png";
import trello from "@/assets/trello.png";
import docstream from "@/assets/docstream.png";
import remyrecipe from "@/assets/remyX.png";
import voltstore from "@/assets/voltstore.png";
import simpleShell from "@/assets/linux.jpg";
import chatApp from "@/assets/chatApp.png";
import { PinContainer } from "./ui/3d-pin";

const projects = [
  {
    title: "Zad Al-Mead",
    description:
      "A full-stack educational platform with custom student registration system and payment verification API. Implemented SEO optimization and built a responsive UI with efficient state management.",
    techStack: [
      "MongoDB",
      "Node.js",
      "Next.js",
      "Express.js",
      "TypeScript",
      "Redux",
    ],
    content: (
      <PinContainer title="Zad Al-Mead" href="https://zadulmead.org">
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[40rem] ">
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={zad || "/placeholder.svg"}
              width={300}
              height={300}
              className="w-full h-full"
              alt="Zad Al-Mead"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    ),
    website: "https://zadulmead.org",
  },
  {
    title: "Rails Trello",
    description:
      "A Trello clone using a monorepo architecture, featuring PostgreSQL with Prisma ORM, tRPC for type-safe API communication, and Auth.js for secure authentication.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Prisma ORM",
      "tRPC",
      "Jotai",
      "Auth.js",
      "Turborepo",
      "Docker",
    ],
    content: (
      <PinContainer
        title="Rails Trello"
        href="https://trello-on-rails.vercel.app"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[40rem] ">
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={trello || "/placeholder.svg"}
              width={300}
              height={300}
              className="w-full h-full object-fill"
              alt="Rails Trello"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    ),
    website: "https://trello-on-rails.vercel.app",
    Github: "https://github.com/IbnuJabir/rails-trello",
  },
  {
    title: "DocStream",
    description:
      "A hospital management system with a real-time statistics dashboard, appointment management, payment integration and automated email notifications.",
    techStack: ["Node.js", "Express.js", "React", "MongoDB", "Redux"],
    content: (
      <PinContainer
        title="DocStream"
        href="https://docstream-frontend.onrender.com"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[40rem] ">
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={docstream || "/placeholder.svg"}
              width={300}
              height={300}
              className="w-full h-full object-fill"
              alt="DocStream"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    ),
    website: "https://docstream-frontend.onrender.com",
    Github: "https://github.com/IbnuJabir/DocStream",
  },
  {
    title: "RemyRecipeX",
    description:
      "An AI-powered app that generates recipes from leftover ingredients. Integrated multiple APIs, deployed with Docker & NGINX.",
    techStack: ["Flask", "React", "TypeScript", "MongoDB", "Docker"],
    content: (
      <PinContainer
        title="RemyRecipeX"
        href="https://remyrecipes.up.railway.app"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[40rem] ">
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={remyrecipe || "/placeholder.svg"}
              width={300}
              height={300}
              className="w-full h-full"
              alt="RemyRecipeX"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    ),
    website: "https://remyrecipes.up.railway.app/",
    Github: "https://github.com/IbnuJabir/RemyRecipeX",
  },
  {
    title: "Simple Shell",
    description:
      "A command-line interpreter that allows users to execute commands and interact with the operating system. Supports basic shell functionalities, such as executing commands, handling arguments, and managing environment variables.",
    techStack: ["C"],
    content: (
      <PinContainer
        title="Simple Shell"
        href="https://github.com/IbnuJabir/simple_shell"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[40rem]">
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={simpleShell || "/placeholder.svg"}
              width={300}
              height={300}
              className="w-full h-full"
              alt="Simple Shell"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    ),
    Github: "https://github.com/IbnuJabir/simple_shell",
  },
  {
    title: "ChatoSphere",
    description:
      "A full-fledged desktop chat application built using React for the frontend and Firebase for the backend. Features include user authentication, real-time messaging, user presence indication, persistent chat history, profile management, and real-time notifications.",
    techStack: ["React", "Firebase", "CSS", "Material-UI"],
    content: (
      <PinContainer
        title="ChatoSphere"
        href="https://github.com/IbnuJabir/fullStack_chatApp"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[40rem]">
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={chatApp || "/placeholder.svg"}
              width={300}
              height={300}
              className="w-full h-full"
              alt="Fullstack Desktop Chat Application"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    ),
    Github: "https://github.com/IbnuJabir/fullStack_chatApp",
  },
  {
    title: "Voltstore",
    description:
      "An online e-commerce platform offering a user-friendly interface, detailed product catalog, advanced search functionality, shopping cart, secure checkout process, and user accounts for order tracking.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Redux"],
    content: (
      <PinContainer
        title="Voltstore"
        href="https://github.com/IbnuJabir/Voltstore"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[40rem]">
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={voltstore || "/placeholder.svg"}
              width={300}
              height={300}
              className="w-full h-full"
              alt="Voltstore"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    ),
    Github: "https://github.com/IbnuJabir/Voltstore",
  },
];

export function Projects() {
  return (
    <div className="w-full py-10">
      <h1 className="text-3xl py-10 px-16 font-changa">Projects</h1>
      <StickyScroll content={projects} />
    </div>
  );
}
