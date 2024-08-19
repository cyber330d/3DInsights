// /components/CourseSearch.tsx
import React, { useState } from "react";
import { Search } from "lucide-react";


type CourseSearchProps = {
  onSearch: (query: string) => void;
};

const CourseSearch: React.FC<CourseSearchProps> = ({ onSearch, }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex  items-center self-stretch w-full bg-white md:w-[50] md:max-w-[50vw] justify-between h-12">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses..."
        className="w-full rounded-lg pl-4 border focus-within:ring-lms-green  focus-within:ring-1 bg-transparent outline-none self-stretch placeholder-slate-950 "
      />
      <button
        onClick={handleSearch}
        className="bg-lms-green text-white -ml-16 py-3.5 px-6 h-12 rounded-r-lg transition"
      >
        <Search className="text-xl" />
      </button>
    </div>
  );
};

export default CourseSearch;
