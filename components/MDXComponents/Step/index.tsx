export default function Step(props) {
  return (
    <div className="flex flex-col items-center py-5 mx-3 space-y-3 text-center md:flex-row md:space-x-5 md:space-y-0">
      <div className="grid place-items-center w-10 h-10 font-black rounded-full border text-slate-light border-navy-green">
        {props.number}
      </div>
      <h3 className="text-2xl font-bold text-slate-light">{props.title}</h3>
    </div>
  );
}
