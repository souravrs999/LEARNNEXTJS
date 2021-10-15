import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

import { SortByViews } from 'util/sortPosts';
import Link from 'next/link';
import { getViewCounts } from 'helpers/viewConter';

import { useRouter } from 'next/router';

export default function Recommended() {
  const router = useRouter();
  let res = getViewCounts();
  const posts = res === undefined ? (res = []) : SortByViews(res);

  const sortedAndExcludedPosts = SortByViews(
    posts.filter((x) => {
      return x.slug != router.query.slug;
    })
  );

  return (
    <div className="flex flex-col mx-5 space-y-5">
      <h1 className="text-3xl font-bold text-slate-light">Suggested</h1>

      <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">
        <Link href={`/blogs/${sortedAndExcludedPosts[0]?.slug}`}>
          <a className="flex flex-col justify-between p-5 w-full rounded bg-navy-lighter">
            <h1 className="py-2 text-2xl font-bold capitalize text-slate-light">
              {sortedAndExcludedPosts[0]?.slug.replaceAll('-', ' ')}
            </h1>
            <div className="flex justify-between py-2">
              <FaLongArrowAltLeft className="w-5 h-5 text-navy-green" />
              <span className="text-sm text-slate">
                {sortedAndExcludedPosts[0]?.views} Views
              </span>
            </div>
          </a>
        </Link>
        <Link href={`/blogs/${sortedAndExcludedPosts[1]?.slug}`}>
          <a className="flex flex-col justify-between p-5 w-full rounded bg-navy-lighter">
            <h1 className="py-2 text-2xl font-bold capitalize text-slate-light">
              {sortedAndExcludedPosts[1]?.slug.replaceAll('-', ' ')}
            </h1>
            <div className="flex justify-between py-2">
              <FaLongArrowAltLeft className="w-5 h-5 text-navy-green" />
              <span className="text-sm text-slate">
                {sortedAndExcludedPosts[1]?.views} Views
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
