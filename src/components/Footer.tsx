import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-center md:text-left">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {currentYear} Designed & Developed by{" "}
          <Link
            href="https://github.com/IbnuJabir"
            target="_blank"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
          >
            Kedir Jabir
          </Link>
        </p>
        <p className="text-sm mt-2 md:mt-0">
          Built with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
          >
            Next.js
          </Link>{" "}
          &{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="font-semibold text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300"
          >
            Tailwind CSS
          </Link>
          , deployed on{" "}
          <Link
            href="https://vercel.com/"
            target="_blank"
            className="font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
          >
            Vercel
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
