import Container from "@/components/Container";
import { useRouter } from "next/router";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import Link from "next/link";

import { getAllFilesFrontMatter } from "@/lib/mdx";
import { postProps } from "types/postProps";

export default function Search(props: postProps) {
  const router = useRouter();

  function filterPosts(posts: any, query: any) {
    if (!query || query == "undefined") {
      return posts;
    }

    return posts.filter((post) => {
      const postTitleString = post.title.toLowerCase();
      return postTitleString.includes(query);
    });
  }

  const filteredPost = filterPosts(props.posts, router.query.sq);

  return (
    <Container>
      <div className="mx-auto max-w-4xl px-5 py-12 flex flex-col w-full space-y-5">
        <h5 className="text-md text-black dark:text-white uppercase">
          search results for{" "}
          <span className="text-bold">
            &apos; {router.query.sq == "undefined" ? "all" : router.query.sq}{" "}
            &apos;
          </span>
        </h5>
        {filteredPost.map((item) => (
          <div
            className="flex flex-wrap md:flex-nowrap w-full items-center space-x-0 md:space-x-10 py-4"
            key={item.title}
          >
            <div className="overflow-hidden w-full lg:w-1/3">
              <Image
                src={item.image}
                width={800}
                height={514}
                alt="tagged images"
                className="rounded-xl"
                placeholder="blur"
                blurDataURL="/img/placeholder-100x64.png"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-5">
                <p className="text-sm font-bold text-black dark:text-white">
                  {item.tags}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {format(parseISO(item.publishedAt), "MMMM dd, yyyy")}
                </span>
              </div>
              <Link href={`/blog/${item.slug}`}>
                <a>
                  <h2 className="text-md font-bold cursor-pointer">
                    {item.title}
                  </h2>
                </a>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.summary}
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12">
                  <Image
                    src="/img/avatar-placeholder-360x360.png"
                    height="260"
                    width="260"
                    alt="avatar image"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col mx-4 space-y-1">
                  <strong className="text-sm text-black dark:text-white">
                    {item.author}
                  </strong>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}