export default function QuotedText({ children }) {
  return (
    <div className="p-5 mx-auto my-3 border-l-2 rounded-xl bg-navy-lighter border-navy-green">
      <div className="text-base italic text-slate">{children}</div>
    </div>
  );
}
