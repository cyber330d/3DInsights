import { Search } from "lucide-react";

export default function SearchBar(props: { className?: string | undefined }) {
  return (
    <div className={`flex items-center justify-between px-1.5 py-2 rounded-lg gap-2 shadow focus-within:ring-lms-green  focus-within:ring-1 text-base ${props.className}`} >
      <label htmlFor="search">
        <Search className="" />
      </label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        className=" bg-transparent outline-none self-stretch"
      />
    </div>
  );
}
