import Image from "next/image";
import { useEmblaCarousel } from "embla-carousel/react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { parseISO, format } from "date-fns";

import { postProps } from "types/postProps";
import { SortByDate } from "util/sortPosts";

export default function Hero(props: postProps) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<any[]>([]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const _tposts = SortByDate(props.posts);

  return (
    <div className="py-12 mx-auto max-w-6xl px-5">
      {/* title */}
      <div className="flex justify-center items-center pb-10">
        <h2 className="text-center text-black dark:text-gray-100 text-4xl font-bold">
          Trending
        </h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {_tposts.map((post) => (
            // carousel slider
            <div
              className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10"
              key={post.title}
            >
              <div className="overflow-hidden lg:w-1/2">
                <Image
                  src={post.image}
                  height={514}
                  width={800}
                  className="rounded-lg"
                  alt="cover image"
                  placeholder="blur"
                  blurDataURL="/img/placeholder-100x64.png"
                />
              </div>
              {/* content */}
              <div className="flex flex-col space-y-3 lg:w-4/5 lg:space-x-20 lg:justify-center">
                {/* tags and date */}
                <div className="flex text-sm mt-4 space-x-5 lg:mx-20">
                  <p className="text-white font-bold">{post.tags}</p>
                  <span className="text-white font-bold">
                    {post.readingTime.text}
                  </span>
                  <p className="font-normal text-gray-500 dark:text-gray-400">
                    {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                  </p>
                  <span className="text-white font-bold"></span>
                </div>
                {/* title */}
                <Link href={`/blog/${post.slug}`}>
                  <a className="cursor-pointer">
                    <h2 className="text-2xl font-bold dark:text-gray-100">
                      {post.title}
                    </h2>
                  </a>
                </Link>
                <p className="text-gray-500 text-justify">{post.summary}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10">
                    <Image
                      src="/img/avatar-placeholder-360x360.png"
                      height="260"
                      width="260"
                      alt="avatar image"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col mx-4 space-y-1">
                    <strong className="text-sm dark:text-gray-100">
                      {post.author}
                    </strong>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {post.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 space-x-2">
        {scrollSnaps.map((_, idx: number) => (
          <button
            className={`w-2 h-2 rounded-full ${
              idx === selectedIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
