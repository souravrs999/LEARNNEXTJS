export default function QuotedText({ children }) {
  return (
    <div className="p-5 mx-auto my-3 rounded-xl border-l-2 bg-navy-lighter border-navy-green">
      <p className="text-base italic text-slate">{children}</p>
    </div>
  );
}
