import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';
import { readdirSync, readFileSync } from 'fs';

import { bundleMDX } from 'mdx-bundler';

import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export async function getFiles(type: string) {
  return readdirSync(join(process.cwd(), 'data', type));
}

export async function getFileBySlug(slug: string, type: string) {
  const source = readFileSync(
    join(process.cwd(), 'data', type, `${slug}.mdx`),
    'utf8'
  );

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ];
      return options;
    }
  });

  return {
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter
    }
  };
}

export async function getAllFilesFrontMatter(type: string) {
  const files = readdirSync(join(process.cwd(), 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(source)
      },
      ...allPosts
    ];
  }, []);
}
