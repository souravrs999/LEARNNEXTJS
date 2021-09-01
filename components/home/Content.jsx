import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function Content({ posts }) {
  return (
    <div className="py-12 mx-auto max-w-6xl">
      <div className="flex flex-wrap space-y-7 lg:space-y-0">
        {posts.map((post) => (
          // item
          <div
            className="relative flex flex-none flex-wrap w-full lg:w-4/12 px-5 py-5"
            key={post.title}
          >
            <div className="overflow-hidden lg:w-auto cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <Image
                    src={post.image_cover}
                    height={512}
                    width={800}
                    className="rounded-lg"
                    alt="cover image"
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
              <Link href={`/blog/${post.slug}`}>
                <a className="cursor-pointer">
                  <h2 className="text-2xl lg:text-xl font-bold dark:text-gray-100">
                    {post.title}
                  </h2>
                </a>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-justify cursor-pointer">
                {post.summary}
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
