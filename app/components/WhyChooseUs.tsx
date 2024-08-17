import Image from "next/image";
import CourseCard from "./CourseCard";
import { Book, GraduationCap, UsersRound } from "lucide-react";

export default function WhyChooseUS() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-12 py-10 shadow  bg-green-100  w-full">
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 text-xl  leading-10">
        <h2 className="text-center">Why learn with our courses?</h2>
        <p className="text-sm text-center font-normal leading-normal text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temporidunt ut labore veniam
        </p>
      </div>
      <div className=" course-container flex sm:flex-row items-center justify-center gap-4  md:gap-12  flex-wrap">
        <div className="flex flex-col items-center self-stretch justify-center w-52 lg:w-64">
          <Book className="size-20 stroke-1 text-lms-green" />
          <h4 className="leading-9 font-bold text-xl text-center">01. Learn</h4>
          <p className="leading-7 text-sm text-neutral-700 text-center ">
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliqua.
          </p>
        </div>
        <div className="flex flex-col items-center self-stretch justify-center w-52 lg:w-64">
          <GraduationCap className="size-20 stroke-1 text-lms-green" />
          <h4 className="leading-9 font-bold text-xl text-center">01. Learn</h4>
          <p className="leading-7 text-sm text-neutral-700 text-center ">
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliqua.
          </p>
        </div>
        <div className="flex flex-col items-center self-stretch justify-center w-52 lg:w-64">
          <UsersRound className="size-20 stroke-1 text-lms-green" />
          <h4 className="leading-9 font-bold text-xl text-center">01. Learn</h4>
          <p className="leading-7 text-sm text-neutral-700 text-center ">
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
