import SearchBar from "@/components/SearchBar";
import ThemeToggler from "@/components/ThemeToggler";
import Image from "next/image";
import React, { useState } from "react";
import { SiNextDotJs, SiReact, SiTailwindcss } from "react-icons/si";
import { navLinks } from "util/navLinks";
import { socialLinks } from "util/socialLinks";
import Link from "next/link";

export default function test() {
  // const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex flex-col space-y-10 items-center">
        <div className="container mx-auto py-12 px-4">
          <div className="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-white dark:bg-dark-muted rounded-lg shadow-lg pb-6 lg:pb-0">
            <div className="relative w-full lg:w-1/2 lg:p-4">
              <Image
                src="/img/snippets/tailwind-img-512x512.jpg"
                width={512}
                height={512}
                alt="image"
                layout="responsive"
                className="rounded-t-lg lg:rounded-lg"
              />
            </div>

            <div className="w-full lg:w-2/3 p-4">
              <div className="inline-grid">
                <span className="text-xs text-dark-muted dark:text-white opacity-50">
                  20 Nov, 2020
                </span>
                <p className="font-semibold text-xl text-dark-muted dark:text-gray-100">
                  Tailwind Dark Mode
                </p>
                <p className="text-sm my-4 text-dark-muted dark:text-white opacity-75">
                  Adding Dark Mode to your NextJS application with TailwindCSS
                  and next-themes
                </p>
                <div className="flex space-x-5">
                  <SiTailwindcss className="text-dark-muted dark:text-white" />
                  <SiReact className="text-dark-muted dark:text-white" />
                  <SiNextDotJs className="text-dark-muted dark:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
