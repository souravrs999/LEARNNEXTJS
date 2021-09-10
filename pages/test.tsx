import ThemeToggler from "@/components/ThemeToggler";
import Image from "next/image";
import { SiNextDotJs, SiReact, SiTailwindcss } from "react-icons/si";

export default function test() {
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex flex-col space-y-10 items-center">
        <div className="flex bg-white dark:bg-dark-muted rounded-lg">
          <Image
            src="/img/banner-400x257.png"
            width={400}
            height={257}
            className="rounded-l-lg"
          />

          <div className="flex flex-col w-3/4 max-w-sm border-l justify-center space-y-1 px-5">
            <div className="flex text-gray-500 dark:text-gray-400">
              <span>10 Nov, 2020</span>
            </div>
            <h2 className="text-black dark:text-white">Tailwind Dark mode</h2>
            <p className="text-gray-500 dark:text-gray-400 pb-3">
              Adding a ThemeToggler to Tailwind with next-themes.
            </p>
            <div className="flex flex-row space-x-5">
              <SiTailwindcss className="text-dark-muted dark:text-white" />
              <SiReact className="text-dark-muted dark:text-white" />
              <SiNextDotJs className="text-dark-muted dark:text-white" />
            </div>
            <p className="text-xs font-bold text-gray-400 pt-3">
              #Tailwind, #Nextjs, #React
            </p>
          </div>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
