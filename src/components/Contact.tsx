import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { FaTelegram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
export default function Contact() {
  return (
    <section className="w-fill md:w-1/2 flex flex-col items-center justify-center py-12 px-4 shadow-md border-[1px] border-blue-500 dark:border-gray-200 rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 font-changa text-center">
        Let&apos;s Have A Chat
      </h2>

      <div className="mt-6 w-full max-w-lg p-6 rounded-2xl font-changa">
        <p className="text-gray-600 text-center  dark:text-gray-200">
          I am available at
        </p>

        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="flex items-center gap-2 text-lg text-blue-600">
            <Phone className="w-5 h-5" />
            <span>+60172691932</span>
          </div>

          <div className="flex items-center gap-2 text-lg text-blue-600">
            <Mail className="w-5 h-5" />
            <a href="mailto:kedirjabir12@gmail.com" className="hover:underline">
              kedirjabir12@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links with Hover Animation */}
        <div className="w-full flex gap-4 md:gap-5 items-center justify-center mt-12">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ibnu-jabir/"
            className="cursor-pointer group"
          >
            <Linkedin className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-blue-600 group-hover:scale-125" />
          </Link>
          <Link
            target="_blank"
            href="https://t.me/Ibnu_Jabir1"
            className="cursor-pointer group"
          >
            <FaTelegram className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-blue-500 group-hover:scale-125" />
          </Link>
          <Link
            target="_blank"
            href="https://x.com/Ibnu_J1"
            className="cursor-pointer group"
          >
            <BsTwitterX className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-black dark:group-hover:text-gray-200 group-hover:scale-125" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ibnujabir42/"
            className="cursor-pointer group"
          >
            <Instagram className="text-gray-900 dark:text-gray-300 size-5 md:size-5 transition-all duration-300 transform group-hover:text-pink-500 group-hover:scale-125" />
          </Link>
        </div>
      </div>
    </section>
  );
}
