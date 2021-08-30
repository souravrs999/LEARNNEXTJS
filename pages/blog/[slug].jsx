import Container from "@/components/Container";

import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "@/lib/mdx";
import MDXComponent from "@/components/MDXComponent";
import BlogLayout from "layout/blog";
import Image from "next/image";

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <BlogLayout matter={frontMatter}>
      <MDXRemote {...mdxSource} components={{ ...MDXComponent }} />
    </BlogLayout>
    //   <Container>
    //   <div className="py-12 mx-5 md:mx-12 lg:mx-28">
    //     <div className="flex flex-col items-center justify-center space-y-3">
    //       {/* author image */}
    //       <div className="w-20 h-20">
    //         <Image
    //           src="/img/avatar-placeholder-360x360.png"
    //           height="260"
    //           width="260"
    //           alt="avatar image"
    //           className="rounded-full"
    //         />
    //       </div>
    //       {/* author details */}
    //       <div className="text-sm text-center">
    //         <p className="text-black dark:text-white font-bold">
    //           {matter.author}
    //         </p>
    //         <span className="text-gray-500 dark:text-gray-400">
    //           {matter.publishedAt}
    //         </span>
    //       </div>
    //       {/* blog title and description*/}
    //       <h2 className="text-4xl dark:text-gray-100 font-bold text-center pt-5 mx-5 md:mx-12 lg:mx-48">
    //         {matter.title}
    //       </h2>
    //       <p className="text-xl text-gray-500 dark:text-gray-400 text-center mx-5 md:mx-16 lg:mx-56 pt-3">
    //         {matter.summary}
    //       </p>

    //       {/* cover image */}
    //       <div className="mx-12 pt-5">
    //         <Image
    //           src={matter.image_cover}
    //           width={800}
    //           height={514}
    //           alt="blog cover image"
    //           className="rounded-xl"
    //         />
    //       </div>
    //     </div>

    //     {/* blog content */}
    //     <div className="mdxComp flex flex-col justify-center space-y-3 text-lg text-gray-500 dark:text-gray-400 mt-5 mx-5 md:mx-12 lg:mx-72">
    //       {children}
    //     </div>
    //   </div>
    // </Container>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles();

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
  const post = await getFileBySlug(params.slug);

  return { props: { ...post } };
}
