import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState();
  return (
    <form
      action={`/search/${searchQuery}`}
      method="GET"
      className="relative m-0"
    >
      <span className="absolute top-3 left-4 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search..."
        onInput={(e: any) => setSearchQuery(e.target.value)}
        className="pl-10 h-10 text-sm border border-gray-300 dark:bg-dark-muted dark:border-dark-muted rounded-full pr-6 text-gray-500 dark:text-gray-100 w-full"
      />
    </form>
  );
}
