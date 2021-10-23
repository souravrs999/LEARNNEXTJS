import Link from 'next/link';

import { icons } from 'icons';

function SnippetCard(props) {
  return (
    <div className="flex flex-col w-full p-5 space-y-3 rounded shadow-lg bg-navy-lighter">
      <div className="flex items-center justify-between">
        <Link href={`/snippets/${props.slug}`}>
          <a>
            <h1 className="text-2xl font-bold text-slate-light">
              {props.title}
            </h1>
          </a>
        </Link>
        <span className="grid w-12 h-12 p-4 rounded-full place-items-center bg-navy-light text-navy-green">
          {icons[props.icon]}
        </span>
      </div>

      <p className="text-slate">{props.summary}</p>
    </div>
  );
}

export default SnippetCard;
