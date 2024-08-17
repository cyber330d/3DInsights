import Image from "next/image";
import CourseCard from "./CourseCard";
import LinkComponent from "./LinkComponent";

export default function Featured() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch md:gap-12 gap-4 p-4 py-10 shadow  bg-green-100 w-full">
      <div className="flex flex-col items-center justify-center gap-s sm:gap-4 text-xl  leading-10  ">
        <h2 className="">Featured Courses</h2>
        <p className="text-sm text-center font-normal leading-normal text-neutral-700">
          Explore our most popular and relevant courses.
        </p>
      </div>
      <div className=" course-container flex items-center justify-center flex-wrap gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <div className="flex items-center justify-center p-3 w-full">
          <LinkComponent
            to="/courses"
            label="Explore More "
            className="!text-lms-green rounded-lg hover:border-transparent hover:bg-white ring-lms-green ring-1 w-60 flex flex-row items-center justify-center px-4 py-2 box-border text-base"
          />
        </div>
      </div>
    </div>
  );
}
