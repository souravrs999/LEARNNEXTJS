import Link from "next/link";
import { socialLinks } from "util/socialLinks";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto  w-full px-18 text-center">
        {/* social icons list */}
        <div className="flex items-center justify-center text-center mb-12 w-full space-x-4">
          {socialLinks.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
              key={item.social}
            >
              <span className="w-10 h-10 bg-gray-200 dark:bg-dark-muted dark:text-white dark:hover:bg-yellow-500 hover:bg-yellow-500 hover:text-white flex items-center justify-center rounded-2xl">
                {item.icon}
              </span>
            </a>
          ))}
        </div>
        {/* copyright text */}
        <div className="px-10 space-y-2">
          <p className="text-gray-400 text-sm">
            Copyright @ {new Date().getFullYear()} All rights reserved
            LEARNNEXTJS
          </p>
          <div className="flex justify-center text-gray-400 space-x-2">
            <Link href="/terms-and-conditions">
              <a href="#" className="hover:underline hover:text-yellow-500">
                Terms & Conditions{" "}
              </a>
            </Link>
            <span>/</span>
            <Link href="/privacy">
              <a href="#" className="hover:underline hover:text-yellow-500">
                {" "}
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
