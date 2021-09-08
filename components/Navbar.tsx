import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks } from "util/navLinks";
import { useTheme } from "next-themes";
import { socialLinks } from "util/socialLinks";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* sliding mobile menu */}
      <div
        className={`w-80 md:w-1/3 lg:w-1/5 h-full fixed right-0 z-50 pt-5 shadow-2xl bg-white dark:bg-dark-primary transform transition ease-in-out duration-500 ${
          collapsed ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="w-full float-left px-5">
          <div className="float-right mt-6 block relative h-8 -top-7">
            <button onClick={() => setCollapsed(!collapsed)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* links list */}
        <div className="overflow-hidden h-1/2 relative pt-0 px-10">
          <div className="text-sm dark:text-white flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link href={link.target} key={link.link}>
                <a className="hover:text-yellow-500">{link.link}</a>
              </Link>
            ))}
          </div>

          {/* theme toggler */}
          <div className="flex w-full mt-5">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-dark-muted"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-800 dark:text-gray-200"
                >
                  {resolvedTheme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* navbar */}
      <nav className="py-5 px-5 w-full border-b border-gray-200 dark:border-dark-muted">
        <div className="mx-auto flex flex-wrap max-w-6xl">
          {/* logo */}
          <div className="order-1 md:order-2 text-center md:w-6/12 w-full mt-2 md:mb-0 mb-4">
            <Link href="/">
              <a className="uppercase font-bold text-black dark:text-gray-100 text-xl">
                LEARNNEXT
              </a>
            </Link>
          </div>
          <div className="order-3 md:order-1 md:w-3/12 w-full md:mb-0 mb-4">
            <SearchBar />
          </div>
          {/* social icons */}
          <div className="order-2 md:order-3 text-right md:w-3/12 w-full mt-2 md:mb-0 mb-4">
            <div className="flex text-right text-gray-900 dark:text-gray-100 top-1.5 relative space-x-3">
              {socialLinks.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                  key={item.social}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Hamburger menu button */}
            <div className="relative ml-auto float-right text-gray-800 text-right -mt-5">
              <button onClick={() => setCollapsed(!collapsed)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 dark:text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
