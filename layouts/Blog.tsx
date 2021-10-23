import { useEffect } from 'react';
import dynamic from 'next/dynamic';

import Container from '@/components/Container';
import SocialSharable from '@/components/Sharable';
import BlogHero from '@/components/BlogHero';

const Suggested = dynamic(() => import('@/components/Suggested'), {
  ssr: false
});

export default function BlogLayout({ children, matter }) {
  // register view for the blog after 10s
  useEffect(() => {
    setTimeout(() => {
      fetch(`/api/views/${matter.slug}`, { method: 'POST' });
    }, 10000);
  }, [matter.slug]);

  return (
    <Container
      title={`${matter.title} - LEARNNEXT`}
      description={matter.summary}
      image={`https://learnnext-blog.vercel.app${matter.image}`}
      date={new Date(matter.publishedAt).toISOString()}
      type="article"
    >
      <section className="flex max-w-6xl mx-auto my-12">
        <BlogHero {...matter} />
      </section>
      <section className="flex max-w-4xl mx-auto">
        <article className="w-full px-5 prose">{children}</article>
      </section>
      <section className="flex flex-col max-w-4xl py-12 mx-auto">
        <SocialSharable title={matter.title} slug={matter.slug} />
        <Suggested />
      </section>
    </Container>
  );
}
