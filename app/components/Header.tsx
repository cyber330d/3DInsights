
import Hero from "./Hero";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full">
      <Navbar className="fixed min-[400px]:px-4 sm:px-6 md:px-8 lg:text-xl flex bg-white z-50 justify-between items-center p-1 w-full" />
      {/* px-12  py-4     h-20 text-xl  */}
    </header>
  );
}
