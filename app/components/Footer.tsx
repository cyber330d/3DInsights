import { Facebook, Linkedin, Twitter, Instagram, Apple, PlayIcon, Map, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import LinkComponent from "./LinkComponent";

export default function Footer() {
  return (
    <footer className="min-h-[35vh] p-12 flex-col ">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col items-start justify-start self-stretch gap-8 py-8 pl-0">
          <div className="flex items-center justify-center w-full text-2xl ">
            <Logo />
          </div>
          <div className="flex flex-col justify-start self-stretch text-base font-semibold gap-5 ">
            <div className="flex flex-col gap-3">
              <p className="flex gap-2">
                {" "}
                <MailIcon /> cyber330d@gmail.com
              </p>
              <p className="flex gap-2">
                {" "}
                <PhoneIcon /> (+234) 8129709392
              </p>
              <p className="flex gap-2">
                {" "}
                <Map /> Department of Computer Engineering
              </p>
              <p className="flex pl-8">Ahmadu Bello Universiy, Zaria</p>
            </div>
            <LinkComponent
              to="/"
              label="Getting Started"
              className="!text-white rounded-lg !bg-lms-green max-w-[50%] flex flex-row items-center justify-center -ml-1 p-2 box-border text-base"
            />
            <div className="flex gap-2 items-center justify-start">
              <Link href="/login" className="bg-black py-1 px-2 rounded">
                <div className="flex items-center gap-2 justify-center">
                  <PlayIcon className="fill-white text-white" />
                  <p className="flex-col flex items-start justify-center">
                    <span className="footer-cta text-[0.6rem] text-white">
                      Get it on
                    </span>
                    <span className="footer-store text-xs text-white">
                      Google Play
                    </span>
                  </p>
                </div>
              </Link>
              <Link href="/register" className="bg-black py-1 px-2 rounded">
                <div className="flex items-center gap-2 justify-center">
                  <Apple className="fill-white text-white " />
                  <p className="flex-col flex items-start justify-center">
                    <span className="footer-cta text-[0.6rem] text-white">
                      Download on the
                    </span>
                    <span className="footer-store text-white text-xs">
                      App store
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start self-stretch gap-8 py-8">
          <h3 className="flex items-start  text-xl leading-5 font-semibold !bg-clip-text ">
            Organization
          </h3>
          <div className="flex flex-col justify-start self-stretch text-base font-semibold gap-5 ">
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Schools
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Groups
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Community
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Help Center
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start self-stretch gap-8 py-8">
          <h3 className="flex items-start  text-xl leading-5 font-semibold !bg-clip-text ">
            Explore
          </h3>
          <div className="flex flex-col justify-start self-stretch text-base font-semibold gap-5 ">
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Courses
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Features
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Blogs
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Community
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Sign UP
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start self-stretch gap-8 py-8">
          <h3 className="flex items-start  text-xl leading-5 font-semibold !bg-clip-text ">
            About
          </h3>
          <div className="flex flex-col justify-start self-stretch text-base font-semibold gap-5 ">
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              3dinsights
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Team
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Link
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start self-stretch gap-8 py-8">
          <h3 className="flex items-start  text-xl leading-5 font-semibold !bg-clip-text ">
            Support
          </h3>
          <div className="flex flex-col justify-start self-stretch text-base font-semibold gap-5 ">
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Getting started
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Help center FAQ
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Documentation
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Developers
            </Link>
            <Link
              href="#"
              className=" hover:text-lms-green transition leading-4"
            >
              Report a bug
            </Link>
          </div>
        </div>
      </div>

      <div className=" border-lms-green border-t-4 py-8  w-full flex items-center justify-between box-border">
        <div className="text-lms-green drop-shadow">© 2024 3dinsights Development Team</div>

        <div className="flex flex-col gap-4">
          <h3 className="w-full font-bold flex items-center justify-center text-balance text-xs leading-tight tracking-tighter text-lms-green drop-shadow-sm">
            FOLLOW US
          </h3>
          <div className="flex items-center justify-center gap-4 text-white">
            <Linkedin className=" bg-[#0A66C2]  fill-white rounded-sm p-1" />
            <Twitter className="text-black  fill-white " />
            <Facebook className="bg-[#0866ff]  fill-white rounded-full pt-1" />
            <Instagram className="text-[#E4405F]  fill-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}

