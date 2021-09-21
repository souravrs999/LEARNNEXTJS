import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { postProps } from 'types/postProps';

export function Tagged(props: postProps) {
  return (
    <>
      {props.posts.map((post) => (
        <div
          className="flex flex-wrap md:flex-nowrap w-full items-center space-x-0 md:space-x-5"
          key={post.title}
        >
          <div className="overflow-hidden w-full md:w-1/3 border border-gray-300 dark:border-dark-muted rounded-lg p-1">
            <Image
              src={post.image}
              width={800}
              height={514}
              alt="tagged images"
              className="rounded-lg"
              layout="responsive"
              placeholder="blur"
              blurDataURL="/img/banner-100x64.png"
            />
          </div>
          <div className="flex flex-col w-full md:w-2/3">
            <div className="flex items-center space-x-3">
              <p className="text-sm font-bold dark:text-white">{post.tags}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </span>
            </div>
            <Link href={`/blogs/${post.slug}`}>
              <a className="cursor-pointer">
                <h2 className="text-base font-bold dark:text-gray-100">
                  {post.title}
                </h2>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
