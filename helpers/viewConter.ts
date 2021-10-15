import { Fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export const getViewCounts = () => {
  const { data: viewCount } = useSWR('/api/views', Fetcher);
  return viewCount;
};
