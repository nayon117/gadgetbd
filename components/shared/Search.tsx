"use client";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState} from "react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    if (query.trim() === "") return;
    // Push query as a URL search param
    router.push(`/products?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-1">
      <input
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none max-sm:max-w-[120px]"
        placeholder="Search & press enter..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button disabled={query.trim() === ""} onClick={handleSearch}>
        <SearchIcon className="size-4 cursor-pointer hover:text-purple-500" />
      </button>
    </div>
  );
};

export default Search;
