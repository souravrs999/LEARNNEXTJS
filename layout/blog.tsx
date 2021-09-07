import Image from "next/image";
import { format, parseISO } from "date-fns";

import Container from "@/components/Container";

export default function BlogLayout({ children, matter }) {
  return (
    <Container
      title={`${matter.title} - LEARNNEXT`}
      description={matter.summary}
      image={`https://learnnextjs-ruby.vercel.app${matter.image}`}
      date={new Date(matter.publishedAt).toISOString()}
      type="article"
    >
      <div className="py-12 mx-auto px-5 __patch">
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* author image */}
          <div>
            <Image
              src="/img/avatar-placeholder-360x360.png"
              height={50}
              width={50}
              alt="avatar image"
              className="rounded-full"
            />
          </div>

          {/* author details */}
          <div className="text-sm text-center">
            <p className="text-black dark:text-white font-bold">
              {matter.author}
            </p>
            <span className="text-gray-500 dark:text-gray-400">
              {format(parseISO(matter.publishedAt), "MMMM dd, yyyy")}
            </span>
          </div>
          {/* blog title and description*/}
          <h2 className="text-4xl dark:text-gray-100 text-center font-bold pt-5">
            {matter.title}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 text-center pt-3">
            {matter.summary}
          </p>

          {/* cover image */}
          <div className="pt-5">
            <Image
              src={matter.image}
              width={800}
              height={514}
              alt="blog cover image"
              className="rounded-xl"
              placeholder="blur"
              blurDataURL="/img/placeholder-100x64.png"
            />
          </div>
          {/* blog content */}
          <div className="mdxComp flex flex-col justify-center text-base space-y-3 text-gray-500 dark:text-gray-400 mt-5 w-full">
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
}
