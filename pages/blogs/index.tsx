import { FaSearch } from 'react-icons/fa';

import BlogCard from '@/components/BlogCard';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import { postProps } from 'types/postProps';
import { getViewCounts } from 'helpers/viewConter';
import { SortByDateDesc } from 'util/sortPosts';
import { useState } from 'react';
import DefaultLayout from '@/layouts/default';

export default function Blog({ posts }: postProps) {
  const viewCount = getViewCounts();
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = SortByDateDesc(posts).filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <DefaultLayout>
      <section className="flex py-12 mx-auto max-w-6xl">
        <div className="flex flex-col mx-5 space-y-5 w-full">
          <h2 className="flex items-center py-5 space-x-2 text-2xl font-bold text-slate-light">
            <span className="font-mono text-base text-navy-green">01.</span>
            <span className="text-3xl font-black">Blogs</span>
            <span className="w-20 h-[1px] bg-navy-green"></span>
          </h2>
          {/* Search items */}
          <div className="flex">
            <div className="relative">
              <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                type="text"
                placeholder="Search Articles"
                className="px-5 py-3 text-sm rounded bg-navy-lighter focus:outline-none text-slate"
              />
              <span className="absolute top-4 right-4 text-slate">
                <FaSearch />
              </span>
            </div>
          </div>

          {/* If no post that matches the search query exists then
          show no posts found message */}
          {!filteredBlogPosts.length && (
            <h4 className="py-5 text-2xl font-bold text-slate">
              No posts found.
            </h4>
          )}
          <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2">
            {filteredBlogPosts.map((item, _idx) => (
              <BlogCard
                {...filteredBlogPosts[_idx]}
                views={
                  viewCount
                    ? viewCount.find((o) => o.slug === item.slug).views
                    : '-'
                }
                key={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');
  return { props: { posts } };
}
