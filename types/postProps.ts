export interface postProps {
  filter?(arg0: (post: any) => any);
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
