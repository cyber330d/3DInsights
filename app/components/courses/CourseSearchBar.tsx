// /components/CourseSearch.tsx
import React, { useState } from "react";

type CourseSearchProps = {
  onSearch: (query: string) => void;
};

const CourseSearch: React.FC<CourseSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="mb-6 flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses..."
        className="w-full p-3 border border-neutral-300 rounded-lg"
      />
      <button
        onClick={handleSearch}
        className="ml-4 bg-lms-Green text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default CourseSearch;
