import { useEffect } from 'react';
import dynamic from 'next/dynamic';

import Container from '@/components/Container';
import SocialSharable from '@/components/Sharable';
import BlogHero from '@/components/BlogHero';

const Suggested = dynamic(() => import('@/components/Suggested'), {
  ssr: false
});

interface BlogType {
  children: any;
  matter?: {
    slug?: string;
    title?: string;
    image?: string;
    summary?: string;
    publishedAt?: string;
  };
}

export default function BlogLayout({ children, matter }: BlogType) {
  // register view for the blog after 10s
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(`/api/views/${matter.slug}`, { method: 'POST' });
  //   }, 10000);
  // }, [matter.slug]);

  return (
    <Container
      title={`${matter.title} - LEARNNEXT`}
      description={matter.summary}
      image={`https://www.learnnext.blog${matter.image}`}
      date={new Date(matter.publishedAt).toISOString()}
      type="article"
    >
      <section className="flex mx-auto my-12 max-w-6xl">
        <BlogHero {...matter} />
      </section>
      <section className="flex mx-auto max-w-4xl">
        <article className="px-5 w-full prose">{children}</article>
      </section>
      <section className="flex flex-col py-12 mx-auto max-w-4xl">
        <SocialSharable title={matter.title} slug={matter.slug} />
        <Suggested />
      </section>
    </Container>
  );
}
