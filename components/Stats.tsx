import useSWR from 'swr';
import millify from 'millify';

import { Fetcher } from '@/lib/fetcher';

const Stats = () => {
  const { data: stats, error } = useSWR('/api/stats', Fetcher);

  return (
    <div className="flex flex-col mx-5 space-y-12 w-full">
      <h2 className="flex items-center py-5 space-x-2 text-2xl font-bold text-slate-light">
        <span className="text-3xl">My Stats</span>
        <span className="w-20 h-[1px] bg-navy-green"></span>
      </h2>

      <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3">
        {/* Items */}
        <div className="flex relative flex-col items-center p-5 space-y-5 w-full rounded shadow-lg bg-navy-lighter">
          <h1 className="text-2xl font-black tracking-wide text-slate-light">
            Page Views
          </h1>
          <span className="text-5xl font-black text-navy-green">
            {!stats ? '-' : millify(stats.pageViews)}
          </span>
        </div>
        {/* Items */}
        <div className="flex flex-col items-center p-5 space-y-5 w-full rounded shadow-lg bg-navy-lighter">
          <h1 className="text-2xl font-black tracking-wide text-slate-light">
            Engagement Rate
          </h1>
          <span className="text-5xl font-black text-navy-green">
            {!stats ? '-' : (stats.engagmentRate * 100).toFixed(0) + '%'}
          </span>
        </div>
        {/* Items */}
        <div className="flex flex-col items-center p-5 space-y-5 w-full rounded shadow-lg bg-navy-lighter">
          <h1 className="text-2xl font-black tracking-wide text-slate-light">
            Total Users
          </h1>
          <span className="text-5xl font-black text-navy-green">
            {!stats ? '-' : millify(stats.totalUsers)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
