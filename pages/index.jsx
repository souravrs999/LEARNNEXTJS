import Head from "next/head";
import Image from "next/image";

import Container from "@/components/Container";
import Hero from "@/components/home/Hero";
import Content from "@/components/home/Content";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Popular from "@/components/Popular";
import { Tagged } from "@/components/Tagged";
import Cta from "@/components/CallToAction";

export default function Home({ posts }) {
  return (
    <Container>
      <Hero posts={posts} />
      <Content posts={posts} />
      <Popular posts={posts} />

      <div className="py-12 mx-auto lg:mx-28">
        <div className="flex flex-wrap px-12">
          <div className="flex flex-col w-full lg:w-1/2 space-y-7">
            <Tagged posts={posts.slice(0, 3)} />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 space-y-7 py-10 lg:py-0">
            <Tagged posts={posts.slice(0, 3)} />
          </div>
        </div>
      </div>

      {/* call to action */}
      <div className="py-12 mx-auto lg:mx-28">
        <Cta />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}
