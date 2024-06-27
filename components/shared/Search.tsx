"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-1">
      <input
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none  max-sm:max-w-[120px]"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        disabled={query === ""}
        onClick={() => router.push(`/search/${query}`)}
      >
        <SearchIcon className="size-4 cursor-pointer hover:text-purple-500" />
      </button>
    </div>
  );
};
export default Search;
