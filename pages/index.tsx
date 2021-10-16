import dynamic from 'next/dynamic';

import Hero from '@/components/Hero';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { postProps } from 'types/postProps';
import { SortByDateDesc } from 'util/sortPosts';
import DefaultLayout from '@/layouts/default';
import { getViewCounts } from 'helpers/viewConter';

const BlogCard = dynamic(() => import('@/components/BlogCard'), {
  ssr: false
});

const Stats = dynamic(() => import('@/components/Stats'), {
  ssr: false
});

export default function Home({ posts }: postProps) {
  const viewCount = getViewCounts();
  return (
    <DefaultLayout>
      <section className="flex mx-auto mb-12 max-w-6xl h-screen">
        <Hero />
      </section>

      {/* Analytics status for learnnext */}
      <section className="flex mx-auto max-w-6xl">
        <Stats />
      </section>

      {/* Latest posts section */}
      <section className="flex mx-auto my-12 max-w-6xl">
        <div className="flex flex-col mx-5 space-y-12 w-full">
          <h2 className="flex items-center py-5 space-x-2 text-2xl font-bold text-slate-light">
            <span className="font-mono text-base text-navy-green">02.</span>
            <span className="" id="recent_posts">
              Recent Posts
            </span>
            <span className="w-20 h-[1px] bg-navy-green"></span>
          </h2>

          <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-2">
            {SortByDateDesc(posts)
              .slice(0, 6)
              .map((item, _idx) => (
                <BlogCard
                  {...posts[_idx]}
                  views={
                    viewCount
                      ? viewCount.find((o) => o.slug === item.slug).views
                      : '-'
                  }
                  key={item.slug}
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
