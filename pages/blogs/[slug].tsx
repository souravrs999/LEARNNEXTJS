import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "@/lib/mdx";
import MDXComponent from "@/components/MDXComponent";
import BlogLayout from "@/layouts/blog";

export default function BlogSlug({ mdxSource, frontMatter }) {
  return (
    <BlogLayout matter={frontMatter}>
      <MDXRemote {...mdxSource} components={{ ...MDXComponent }} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug(params.slug, "posts");

  return { props: { ...post }, revalidate: 60 * 60 * 1 };
}