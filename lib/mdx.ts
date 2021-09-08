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

let BASE_PATH = process.cwd();
if (process.env.NODE_ENV === "production") {
  BASE_PATH = join(process.cwd(), ".next/serverless/chunks");
}

export async function getFiles() {
  return readdirSync(join(BASE_PATH, "/data/posts"));
}

export async function getFileBySlug(slug: string) {
  const source = readFileSync(
    join(BASE_PATH, "/data/posts", `${slug}.mdx`),
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
  const files = readdirSync(join(BASE_PATH, "/data/posts"));

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(
      join(BASE_PATH, "/data/posts", postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
  }, []);
}
