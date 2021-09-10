import Container from "@/components/Container";
import Content from "@/components/home/Content";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { postProps } from "types/postProps";

export default function Blog({ posts }: postProps) {
  return (
    <Container>
      <div className="flex justify-center items-center py-5">
        <h2 className="text-center text-black dark:text-gray-100 text-4xl font-bold">
          All Blogs
        </h2>
      </div>
      <Content posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}
