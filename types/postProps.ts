export interface postProps {
  posts: {
    title?: string;
    publishedAt?: string;
    summary?: string;
    image?: string;
    author?: string;
    tags?: string;
    designation?: string;
    slug?: string;
  }[];
}
