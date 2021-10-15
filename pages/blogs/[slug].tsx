import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponent from '@/components/MDXComponent';
import BlogLayout from '@/layouts/blog';
import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

export default function BlogSlug({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogLayout matter={frontMatter}>
      <Component components={{ ...MDXComponent }} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug(params.slug, 'posts');

  return { props: { ...post } };
}
