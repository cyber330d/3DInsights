
import Hero from "./Hero";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-screen ">
      <Navbar className="fixed px-12  py-4 flex items-center justify-between w-full h-16 text-xl z-50" />
      <Navbar className="fixed px-12  py-4 flex bg-white items-center justify-between w-full h-20 text-xl z-50" />

      {/* <Hero className="max-h-[90vh] h-full w-full flex items-center justify-center gap-16" /> */}
    </header>
  );
}
