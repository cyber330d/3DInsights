import Image from "next/image";
import CourseCard from "./CourseCard";
import LinkComponent from "./LinkComponent";

export default function Featured() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-12 py-10 shadow  bg-green-100 w-full">
      <div className="flex flex-col items-center justify-center gap-4 text-3xl  leading-10 p-6 ">
        <h2 className="">Featured Courses</h2>
        <p className="text-base font-normal leading-normal text-neutral-700">
          Explore our most popular and relevant courses. Lorem ipsum dolor, sit
        </p>
      </div>
      <div className=" course-container flex items-center grid-cols-4 justify-center gap-4 flex-wrap">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <div className="flex items-center justify-center p-8">
          <LinkComponent
            to="/"
            label="Explore More "
            className="!text-lms-green rounded-lg hover:border-transparent hover:bg-white ring-lms-green ring-1 w-60 flex flex-row items-center justify-center px-4 py-4 box-border text-base"
          />
        </div>
      </div>
    </div>
  );
}
