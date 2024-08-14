import Link from "next/link";
import Logo from "./Logo";
import LinkComponent from "./LinkComponent";
import SearchBar from "./SearchBar";

export default function Navbar(props: { className?: string | undefined; }) {
  return (
    <>
      <nav className={props.className}>
        {/* logo container */}
        <div className="flex items-center justify-center w-32 h-16">
          <Logo />
        </div>

        {/* links container */}
        <div className="flex items-center justify-center gap-4 rounded-lg text-black font-semibold text-base">
          <LinkComponent to="/" label="Home" className="text-lms-green" />
          <LinkComponent to="/explore" label="Explore" />
          <LinkComponent to="/courses" label="Courses" />
          <LinkComponent to="/about" label="About" />
          {/*faq contact as children*/}
        </div>

        {/* auth and search container */}
        <div className="flex items-center justify-center gap-2">
          <SearchBar/>
          <LinkComponent
            to="/"
            label="Sign in"
            className="!text-white rounded-lg !bg-lms-green w-24 flex flex-row items-center justify-center p-2 box-border text-base"
          />
        </div>
      </nav>
    </>
  );
}
