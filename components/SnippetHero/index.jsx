import { icons } from 'icons';

function SnippetHero(props) {
  return (
    <div className="flex flex-col w-full pt-12 mx-5">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-black text-slate-light">{props.title}</h2>
        <div className="w-16 h-16 p-4 rounded-full bg-navy-dark">
          <span className="grid w-full h-full place-items-center text-navy-green">
            {icons[props.icon]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SnippetHero;
