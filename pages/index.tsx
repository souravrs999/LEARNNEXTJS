import Container from "@/components/Container";
import Hero from "@/components/home/Hero";
import Content from "@/components/home/Content";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Popular from "@/components/Popular";
import { Tagged } from "@/components/Tagged";
import Cta from "@/components/CallToAction";

import { postProps } from "types/postProps";

export default function Home(props: postProps) {
  return (
    <Container>
      <Hero posts={props.posts} />
      <Content posts={props.posts} />
      <Popular posts={props.posts} />

      <div className="py-12 mx-auto max-w-6xl">
        <div className="flex flex-wrap px-5">
          <div className="flex flex-col w-full lg:w-1/2 space-y-7 px-2">
            <h2 className="font-bold text-xl dark:text-white">Recent</h2>
            <Tagged posts={props.posts.slice(0, 3)} />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 space-y-7 px-2 py-10 lg:py-0">
            <h2 className="font-bold text-xl dark:text-white">Most Viewed</h2>
            <Tagged posts={props.posts.slice(0, 3)} />
          </div>
        </div>
      </div>

      {/* call to action */}
      <div className="py-12 mx-auto max-w-6xl">
        <Cta />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}
