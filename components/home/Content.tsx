import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { postProps } from "types/postProps";
import { SortByDate } from "util/sortPosts";

export default function Content(props: postProps) {
  const _tposts = SortByDate(props.posts);

  return (
    <div className="py-12 mx-auto max-w-6xl">
      <div className="flex flex-wrap space-y-7 lg:space-y-0">
        {_tposts.map((post) => (
          // item
          <div
            className="relative flex flex-none flex-wrap w-full lg:w-4/12 px-5 py-3"
            key={post.title}
          >
            <div className="overflow-hidden w-full cursor-pointer rounded-lg border border-gray-300 dark:border-none p-1">
              <Link href={`/blogs/${post.slug}`}>
                <a>
                  <Image
                    src={post.image}
                    height={512}
                    width={800}
                    layout="responsive"
                    className="rounded-lg"
                    alt="cover image"
                    placeholder="blur"
                    blurDataURL="/img/banner-100x64.png"
                  />
                </a>
              </Link>
            </div>
            {/* content */}
            <div className="flex flex-col space-y-3">
              {/* tags and date */}
              <div className="flex text-sm mt-4 space-x-5">
                <p className="font-bold dark:text-white">{post.tags}</p>
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                </p>
              </div>
              {/* title */}
              <Link href={`/blogs/${post.slug}`}>
                <a className="cursor-pointer">
                  <h2 className="text-xl font-bold dark:text-gray-100">
                    {post.title}
                  </h2>
                </a>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-justify cursor-pointer">
                {post.summary.slice(0, 90)} ...
              </p>
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
                  <strong className="text-sm dark:text-white">
                    {post.author}
                  </strong>
                  <p className="text-xs text-gray-500">{post.designation}</p>
                </div>
              </div>
            </div>
          </div>
          //   /item
        ))}
      </div>
    </div>
  );
}
