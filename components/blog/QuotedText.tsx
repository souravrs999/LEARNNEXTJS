export default function QuotedText({ children }) {
  return (
    <div className="mx-auto bg-gray-200 dark:bg-dark-muted p-5 rounded-xl border-l-2 border-yellow-600">
      <p className="italic text-base text-gray-500 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
}
