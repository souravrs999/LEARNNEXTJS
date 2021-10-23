import Link from 'next/link';

import { icons } from 'icons';

function SnippetCard(props) {
  return (
    <div className="flex flex-col p-5 space-y-3 w-full rounded shadow-lg bg-navy-lighter">
      <div className="flex justify-between items-center">
        <Link href={`/snippets/${props.slug}`}>
          <a>
            <h1 className="text-2xl font-bold text-slate-light">
              {props.title}
            </h1>
          </a>
        </Link>
        <span className="grid place-items-center p-3 w-12 h-12 rounded-full bg-navy-light text-navy-green snip">
          {icons[props.icon]}
        </span>
      </div>

      <p className="text-slate">{props.summary}</p>
    </div>
  );
}

export default SnippetCard;
