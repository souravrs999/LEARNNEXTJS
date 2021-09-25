import Image from 'next/image';
import { useEmblaCarousel } from 'embla-carousel/react';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

import { postProps } from 'types/postProps';
import { SortByDate } from 'util/sortPosts';

import RecursiveTimeout from './recursiveTimeout';

const AUTOPLAY_INTERVAL = 4000; // 4 seconds

export default function Hero(props: postProps) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<any[]>([]);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = RecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollTo = useCallback(
    (index: number) => {
      embla && embla.scrollTo(index);
      stop();
    },
    [embla, stop]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    play();
  }, [play]);

  const _tposts = props.posts ? SortByDate(props.posts) : [];

  return (
    <div className="px-5 py-12 mx-auto max-w-6xl">
      {/* title */}
      <div className="flex justify-center items-center pb-10">
        <h2 className="text-4xl font-bold text-center text-black dark:text-gray-100">
          Trending
        </h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" onMouseOver={stop} onMouseLeave={play}>
          {_tposts.map((post) => (
            // carousel slider
            <div
              className="flex relative flex-wrap flex-none mx-10 w-full lg:flex-nowrap"
              key={post.title}
            >
              <div className="overflow-hidden p-1 w-full rounded-lg border border-gray-300 lg:w-1/2 dark:border-dark-muted">
                <Image
                  src={post.image}
                  height={514}
                  width={800}
                  layout="responsive"
                  alt="cover image"
                  className="rounded-lg"
                  placeholder="blur"
                  blurDataURL="/img/banner-100x64.png"
                />
              </div>
              {/* content */}
              <div className="flex flex-col space-y-3 lg:w-4/5 lg:space-x-20 lg:justify-center">
                {/* tags and date */}
                <div className="flex mt-4 space-x-5 text-sm lg:mx-20">
                  <p className="font-bold text-black dark:text-white">
                    {post.tags}
                  </p>
                  <span className="text-black dark:text-white">
                    {post.readingTime.text}
                  </span>
                  <p className="font-normal text-gray-500 dark:text-gray-400">
                    {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                  </p>
                  <span className="font-bold text-white"></span>
                </div>
                {/* title */}
                <Link href={`/blogs/${post.slug}`}>
                  <a className="cursor-pointer">
                    <h2 className="text-2xl font-bold dark:text-gray-100">
                      {post.title}
                    </h2>
                  </a>
                </Link>
                <p className="text-justify text-gray-500 dark:text-gray-400">
                  {post.summary}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10">
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
      <div className="flex justify-center items-center mt-5 space-x-2">
        {scrollSnaps.map((_, idx: number) => (
          <button
            aria-label="pagination dots"
            className={`w-2 h-2 rounded-full ${
              idx === selectedIndex ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
