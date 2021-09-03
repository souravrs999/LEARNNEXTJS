import Image from "next/image";
import { useEmblaCarousel } from "embla-carousel/react";
import { useState, useEffect, useCallback } from "react";

import { postProps } from "types/postProps";

export default function Popular(props: postProps) {
  const [emblaRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    inViewThreshold: 0.7,
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<any[]>([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
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

  return (
    <div className="py-12 mx-auto max-w-6xl">
      {/* title */}
      <div className="flex justify-center items-center pb-16">
        <h2 className="text-center text-black dark:text-white text-5xl font-bold">
          Most Popular Posts
        </h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {props.posts.map((item) => (
            // carousel slider
            <div
              className="relative flex flex-none flex-wrap w-full md:w-4/6 px-5"
              key={item.title}
            >
              <div className="overflow-hidden lg:w-full">
                <Image
                  src={item.image}
                  height={514}
                  width={800}
                  className="rounded-lg"
                  alt="cover image"
                  placeholder="blur"
                  blurDataURL="/img/placeholder-100x64.png"
                />
              </div>
              {/* content */}
              <div className="flex flex-col space-y-4  lg:justify-center">
                {/* tags and date */}
                <div className="flex text-sm mt-4 space-x-5">
                  <p className="font-bold dark:text-white">{item.tags}</p>
                  <p className="font-normal text-gray-500 dark:text-gray-400">
                    12 Jun 2020
                  </p>
                </div>
                {/* title */}
                <h2 className="text-2xl lg:text-xl font-bold dark:text-gray-100">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify">
                  {item.summary}
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12">
                    <Image
                      src="/img/avatar-placeholder-360x360.png"
                      height="260"
                      width="260"
                      alt="avatar image"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col mx-4 space-y-1">
                    <strong className="text-sm dark:text-white">
                      Sergy Campbell
                    </strong>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      CEO & Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 space-x-2">
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
