import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import { readdirSync, readFileSync } from "fs";

import remarkSlug from "remark-slug";
import remarkCodeTitles from "remark-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const POST_PATH = "/data/posts";

export async function getFiles() {
  return readdirSync(join(process.cwd(), POST_PATH));
}

export async function getFileBySlug(slug) {
  const source = readFileSync(
    join(process.cwd(), POST_PATH, `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkCodeTitles],
      rehypePlugins: [
        mdxPrism,
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter() {
  const files = readdirSync(join(process.cwd(), POST_PATH));

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), POST_PATH, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
}
