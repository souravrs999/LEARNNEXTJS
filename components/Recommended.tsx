import { Fetcher } from '@/lib/fetcher';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import useSWR from 'swr';
import { SortByViews } from 'util/sortPosts';
import Link from 'next/link';

export default function Recommended() {
  let _viewEndPoint = 'https://learnnext-blog.vercel.app/api/views';
  if (process.env.NODE_ENV !== 'production') {
    _viewEndPoint = 'http://localhost:3000/api/views';
  }
  let { data: _rec } = useSWR(_viewEndPoint, Fetcher);
  const posts = _rec === undefined ? (_rec = []) : SortByViews(_rec);

  return (
    <div className="mx-auto flex flex-col w-full space-y-7 py-12">
      <h2 className="font-bold text-3xl">Most Viewed</h2>
      <div className="flex space-x-5">
        {/* post 1 */}
        <Link href={`/blogs/${posts[0]?.slug}`}>
          <a className="cursor-pointer">
            <div className="flex flex-col space-y-3 w-1/2 border border-gray-300 dark:border-dark-muted rounded-lg p-3 justify-between">
              <h2 className="text-black dark:text-white capitalize">
                {posts[0]?.slug.replaceAll('-', ' ')}
              </h2>
              <div className="flex flex-row  items-center justify-between">
                <FaLongArrowAltLeft className="text-yellow-500 w-7 h-7" />
                <span className="text-lg text-gray-500 dark:text-gray-400">
                  Views {posts[0]?.views}
                </span>
              </div>
            </div>
          </a>
        </Link>
        {/* post 2 */}
        <Link href={`/blogs/${posts[1]?.slug}`}>
          <a className="cursor-pointer">
            <div className="flex flex-col space-y-3 w-1/2 border border-gray-300 dark:border-dark-muted rounded-lg p-3 justify-between">
              <h2 className="text-black dark:text-white capitalize">
                {posts[1]?.slug.replaceAll('-', ' ')}
              </h2>
              <div className="flex flex-row justify-between items-center">
                <span className="text-lg text-gray-500 dark:text-gray-400">
                  Views {posts[1]?.views}
                </span>
                <FaLongArrowAltRight className="text-yellow-500 w-7 h-7" />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
