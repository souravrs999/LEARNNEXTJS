import { useMemo } from 'react';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponent from '@/components/MDXComponents';
import SnippetLayout from '@/layouts/Snippets';
import { getMDXComponent } from 'mdx-bundler/client';

export default function BlogSlug({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <SnippetLayout matter={frontMatter}>
      <Component components={{ ...MDXComponent }} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('snippets');

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
  const post = await getFileBySlug(params.slug, 'snippets');

  return { props: { ...post } };
}
