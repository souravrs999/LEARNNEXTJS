import Image from 'next/image';
import { format, parseISO } from 'date-fns';

import Container from '@/components/Container';
import { useEffect } from 'react';
import SocialSharable from '@/components/Sharable';
import Recommended from '@/components/Recommended';
import BlogHero from '@/components/BlogHero';

export default function BlogLayout({ children, matter }) {
  useEffect(() => {
    function registerView() {
      fetch(`/api/views/${matter.slug}`, { method: 'POST' });
    }
    registerView();
  }, [matter.slug]);

  return (
    <Container
      title={`${matter.title} - LEARNNEXT`}
      description={matter.summary}
      image={`https://learnnext-blog.vercel.app${matter.image}`}
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
        <Recommended />
      </section>
    </Container>
  );
}
