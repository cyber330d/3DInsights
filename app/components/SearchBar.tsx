import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center px-4 py-2 rounded-lg gap-2 shadow min-w-5 focus-within:ring-lms-green  focus-within:ring-1 ">
      <label htmlFor="search">
        <Search className="" />
      </label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        className=" bg-transparent outline-none"
      />
    </div>
  );
}
