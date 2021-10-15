import Image from 'next/image';
import { BsCalendar3 } from 'react-icons/bs';
import { GiEmptyChessboard, GiWatch } from 'react-icons/gi';
import { FaRegEye } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { format, parseISO } from 'date-fns';
import { getViewCounts } from 'helpers/viewConter';

const BlogHero = (props) => {
  const viewCount = getViewCounts();

  return (
    <div className="flex mx-5 w-full">
      <div className="flex relative flex-col w-full">
        <div className="w-full max-w-3xl h-auto">
          <Image
            src={props.image}
            width={800}
            height={514}
            layout="responsive"
            className="md:rounded"
            placeholder="blur"
            blurDataURL="/img/blurData.png"
            alt=""
          />
        </div>
        <div className="right-0 top-full p-5 w-full md:rounded-l md:absolute md:w-2/3 md:top-1/4 bg-navy-lighter">
          <div className="flex flex-col space-y-5">
            <div className="grid grid-cols-2 gap-1 md:grid-cols-3 text-navy-green">
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
                <span className="text-xs">
                  {viewCount
                    ? viewCount.find((o) => o.slug === props.slug).views
                    : '-'}{' '}
                  views
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-black text-slate-light">
              {props.title}
            </h1>
            <p className="text-sm text-slate">{props.summary}</p>
            <div className="flex items-center space-x-2 text-xs text-slate">
              <GoPerson className="w-4 h-4 text-navy-green" />
              <span>{props.author}</span>
            </div>
            <div className="flex right-0 space-x-3 font-mono text-sm md:absolute md:-bottom-7 text-slate">
              {props.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogHero;
