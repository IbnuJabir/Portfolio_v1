import React from "react";
import { Timeline } from "./ui/timeline";
function Experience() {
  const data = [
    {
      time: "June 2023 - Present",
      title: "Full Stack Developer",
      company: "Alif Technologies",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Led development and optimization projects, improving system
            performance and cutting costs at <strong>Alif Technologies</strong>.
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-8 pl-2">
            <li>
              Increased productivity by <strong>52%</strong> with Redux state
              management.
            </li>
            <li>
              Deployed applications on cloud platforms, reducing infrastructure
              costs by <strong>25%</strong>.
            </li>
            <li>
              Achieved <strong>98% bug-free</strong> code with rigorous testing
              using Jest.
            </li>
            <li>
              Optimized backend performance with MongoDB, reducing system
              downtime by <strong>35%</strong>.
            </li>
          </ul>
        </div>
      ),
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Jest",
        "Cloud Deployment",
        "Docker",
        "CI/CD",
      ],
    },
    {
      time: "Jan 2024 - March 2024",
      title: "Full Stack Developer",
      company: "Kasma Software Solution",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Developed full-stack applications, optimized performance, and
            enhanced API efficiency at <strong>Kasma Software Solution</strong>.
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-8 pl-2">
            <li>
              Built full-stack applications using{" "}
              <strong>Node.js & React.js</strong>, optimizing performance by{" "}
              <strong>45%</strong>.
            </li>
            <li>
              Implemented APIs, improving data flow efficiency by{" "}
              <strong>60%</strong>.
            </li>
            <li>
              Boosted mobile responsiveness to <strong>100%</strong> using{" "}
              <strong>HTML5, CSS3, and Tailwind CSS</strong>.
            </li>
          </ul>
        </div>
      ),
      skills: [
        "Node.js",
        "React.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Tailwind CSS",
        "JavaScript",
        "Redux",
      ],
    },
    {
      time: "Feb 2022 - June 2023",
      title: "Frontend Mentor",
      company: "Alif Technologies",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Provided mentorship, training, and frontend development best
            practices to junior developers at <strong>Alif Technologies</strong>
            .
          </p>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-8 pl-2">
            <li>
              Mentored <strong>10 junior developers</strong> in modern frontend
              frameworks like React.js & Next.js.
            </li>
            <li>
              Designed and conducted training sessions on{" "}
              <strong>Tailwind CSS, Material UI, and ShadCN</strong>.
            </li>
            <li>
              Reviewed and optimized frontend code, ensuring adherence to best
              practices with a <strong>95% code quality rating</strong>.
            </li>
            <li>
              Collaborated with cross-functional teams to bridge knowledge gaps
              and align frontend development with project goals.
            </li>
          </ul>
        </div>
      ),
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Material UI",
        "ShadCN",
        "JavaScript",
        "Frontend Architecture",
        "Code Reviews",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 pl-16 md:px-16 ">
      <Timeline data={data} />
    </div>
  );
}

export default Experience;
