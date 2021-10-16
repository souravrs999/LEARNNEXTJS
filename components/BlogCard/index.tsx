import Link from 'next/link';

import { format, parseISO } from 'date-fns';
import { FaRegEye } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import { GiWatch } from 'react-icons/gi';

const BlogCard = (props) => {
  return (
    <div className="p-5 w-full rounded shadow-lg bg-navy-lighter">
      <div className="flex flex-col space-y-5">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 text-navy-green">
          <div className="flex space-x-2">
            <BsCalendar3 />
            <span className="text-xs">
              {format(parseISO(props.publishedAt), 'MMMM dd, yyyy')}
            </span>
          </div>
          <div className="flex space-x-2">
            <GiWatch />
            <span className="text-xs">{props.readingTime.text}</span>
          </div>
          <div className="flex space-x-2">
            <FaRegEye />
            <span className="text-xs">{props.views} views</span>
          </div>
        </div>

        <Link href={`/blogs/${props.slug}`}>
          <a>
            <h2 className="text-xl font-bold text-slate-light">
              {props.title}
            </h2>
          </a>
        </Link>
        <p className="text-slate">{props.summary}</p>
        <div className="flex space-x-5 font-mono text-sm text-slate">
          {props.tags.map((tag) => (
            <p className="" key={tag}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
