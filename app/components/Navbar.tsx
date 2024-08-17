"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import Logo from "./Logo";
import LinkComponent from "./LinkComponent";
import SearchBar from "./SearchBar";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar(props: { className?: string | undefined }) {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <nav className={`navbar ${props.className}`}>
        {/* logo container */}
        <div className="flex items-center justify-center w-32">
          <Logo />
        </div>

        {/* links container */}
        <div
          className={`flex-col md:flex md:flex-row absolute md:static rounded-lg top-16 pl-16 pr-8 pb-12 md:pr-0 md:pb-0 md:pl-0 min-h-max left-0 w-[65vw] min-[560px]:w-[50vw] md:w-fit bottom-0 items-start md:items-center md:rounded-lg justify-start gap-4 lg:gap-10 text-left !bg-white text-black ${
            isVisible ? "flex !bg-white" : "hidden"
          }`}
        >
          <X
            className="mt-6 md:hidden cursor-pointer self-end"
            id="navToggle"
            onClick={handleClick}
          />
          <SearchBar className="md:hidden w-full" />

          <LinkComponent
            to="/"
            label="Home"
            className={pathname === "/" ? "text-lms-green" : ""}
          />
          <LinkComponent
            to="/explore"
            label="Explore"
            className={pathname === "/explore" ? "text-lms-green" : ""}
          />
          <LinkComponent
            to="/courses"
            label="Courses"
            className={pathname === "/courses" ? "text-lms-green" : ""}
          />
          <LinkComponent
            to="/about"
            label="About"
            className={pathname === "/about" ? "text-lms-green" : ""}
          />
        </div>

        {/* auth and search container */}
        <div className="flex items-center justify-center gap-4">
          <SearchBar className="hidden min-[560px]:flex md:w-44 min-[960px]:w-fit" />
          <LinkComponent
            to="/login"
            label="Sign in"
            className="!text-white rounded-lg bg-lms-green w-20 ml-4 md:ml-0 flex flex-row items-center justify-center p-0.5 box-border text-base md:p-1"
          />
          {isVisible ? (
            <X
              className="md:hidden cursor-pointer"
              id="navToggle"
              onClick={handleClick}
            />
          ) : (
            <Menu
              className="md:hidden cursor-pointer"
              id="navToggle"
              onClick={handleClick}
            />
          )}
        </div>
      </nav>
    </>
  );
}
