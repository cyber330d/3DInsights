import Image from "next/image";
import LinkComponent from "./LinkComponent";

export default function TeachOrLearn() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-8 max-md:py-12 px-4 md:px-4">
      <div className="flex items-center justify-between gap-8 ">
        <div className="flex items-center justify-center w-1/2 md:p-8 md:h-1/3">
          <Image
            src="/instructor.png"
            width="600"
            height="400"
            alt="course name"
            className="md:w-1/3 w-full border-none rounded-t-xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-1/2 gap-2 sm:gap-4 md:p-8">
          <h3 className="text-base text-center md:text-xl font-medium text-neutral-700 leading-5 md:leading-7">
            Become an Instructor
          </h3>
          <p className="text-[10px] md:text-base md:leading-6 px text-center-3  text-neutral-600">
            Instructors from around the world teach millions of students on 3D
            Insights. We provide the tools and skills to teach what you love.
          </p>
          <LinkComponent
            to="/"
            label="Start Your Journey"
            className="ring-1 ring-lms-green hover:bg-green-400 rounded-lg  text-neutral-700  md:px-4 md:py-2 mx-0 font-normal md:leading-5 text-[10px] px-2 py-0.5 text-center md:text-sm"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-8 ">
        <div className="flex flex-col items-start justify-center w-1/2 gap-4 md:p-8">
          <h3 className="text-base text-center md:text-xl font-medium  leading-5 md:leading-7  text-neutral-600">
            Transform your life through education
          </h3>
          <p className="text-[10px] md:text-base md:leading-6 px text-center-3  text-neutral-500">
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <LinkComponent
            to="/"
            label="Start Learning Now"
            className="ring-1 ring-lms-green hover:bg-green-400 text-neutral-700 rounded-lg md:px-4 md:py-2 mx-0 font-normal md:leading-5 text-[10px] px-2 py-0.5 text-center md:text-sm"
          />
        </div>
        <div className="flex items-center justify-center w-1/2 md:p-8 md:h-1/3">
          <Image
            src="/student.png"
            width="600"
            height="400"
            alt="course name"
            className="md:w-1/3 w-full border-none rounded-t-xl"
          />
        </div>
      </div>
    </div>
  );
}
