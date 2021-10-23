import { icons } from 'icons';

function SnippetHero(props) {
  return (
    <div className="flex flex-col py-12 mx-5 w-full">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <h2 className="order-2 my-3 text-4xl font-black text-center md:order-1 text-slate-light md:my-0">
          {props.title}
        </h2>
        <div className="order-1 my-3 w-16 h-16 rounded-full bg-navy-dark md:order-2 md:my-0">
          <span className="grid place-items-center p-4 w-full h-full text-navy-green snip">
            {icons[props.icon]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SnippetHero;
