import { format, parseISO } from "date-fns";
import Image from "next/image";
import { postProps } from "types/postProps";

export function Tagged(props: postProps) {
  return (
    <>
      {props.posts.map((post) => (
        <div
          className="flex flex-wrap md:flex-nowrap w-full items-center space-x-0 md:space-x-5"
          key={post.title}
        >
          <div className="overflow-hidden w-full lg:w-1/3">
            <Image
              src="/img/placeholder-400x257.png"
              width={800}
              height={514}
              alt="tagged images"
              className="rounded-xl"
              placeholder="blur"
              blurDataURL="/img/placeholder-100x64.png"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-5">
              <p className="text-sm font-bold dark:text-white">{post.tags}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
              </span>
            </div>
            <h2 className="text-base font-bold dark:text-gray-100">
              {post.title}
            </h2>
            <div className="flex items-center">
              <div className="h-8 w-8">
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
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {post.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
