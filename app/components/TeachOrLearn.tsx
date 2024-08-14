import Image from "next/image";
import LinkComponent from "./LinkComponent";

export default function TeachOrLearn() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center p-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center w-1/2 p-8 h-1/3">
          <Image
            src="/instructor.png"
            width="600"
            height="400"
            alt="course name"
            className="w-1/3 border-none  rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-1/2 gap-2 p-8">
          <h3 className="text-xl font-semibold leading-7">
            Become an Instructor
          </h3>
          <p className="text-base leading-6">
            Instructors from around the world teach millions of students on 3D
            Insights. We provide the tools and skills to teach what you love.
          </p>
          <LinkComponent
            to="/"
            label="Start Your Instructor Journey"
            className="ring-1 ring-lms-green rounded-lg p-4 mx-0 font-normal leading-5 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-center w-1/2 gap-2 pr-8">
          <h3 className="text-xl font-semibold leading-7">
            Transform your life through education
          </h3>
          <p className="text-base leading-6">
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <LinkComponent
            to="/"
            label="Start Learning Now"
            className="ring-1 ring-lms-green rounded-lg p-4 mx-0 font-normal leading-5 text-sm"
          />
        </div>
        <div className="flex items-center justify-center w-1/2 p-8 h-1/3">
          <Image
            src="/student.png"
            width="600"
            height="400"
            alt="course name"
            className="w-1/3 border-none  rounded-t-2xl"
          />
        </div>
      </div>
    </div>
  );
}
