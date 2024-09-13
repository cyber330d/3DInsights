"use client"; // Add this line at the top

import React, { useState, useCallback } from "react";
import { Search } from "lucide-react";

// Debounce function to limit the rate at which a function is executed
const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

type CourseSearchProps = {
  onSearch: (query: string) => void;
};

const CourseSearchBar: React.FC<CourseSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query.trim());
    }, 300),
    [onSearch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  const handleSearch = () => {
    // Trigger search with trimmed query
    onSearch(query.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center self-stretch w-full bg-white md:w-[50%] md:max-w-[50vw] justify-between h-12">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search courses..."
        className="w-full rounded-lg pl-4 border focus-within:ring-lms-green focus-within:ring-1 bg-transparent outline-none self-stretch placeholder-slate-950"
      />
      <button
        onClick={handleSearch}
        className="bg-lms-green text-white ml-2 py-2 px-4 h-12 rounded-r-lg transition"
      >
        <Search className="text-xl" />
      </button>
    </div>
  );
};

export default CourseSearchBar;
