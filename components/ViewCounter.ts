import { Fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export default function ViewCounter(slug: any) {
  const { data: viewCount } = useSWR(`/api/views/${slug}`, Fetcher);
  const views = new Number(viewCount?.views);

  return `${views > 0 ? views.toLocaleString() : "---"} views`;
}
