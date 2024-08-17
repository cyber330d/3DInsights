import Image from "next/image";
import CourseCard from "./CourseCard";
import LinkComponent from "./LinkComponent";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-12 py-10 shadow bg-green-100 ">
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-4 text-xl py-5 leading-10 bg-green-50 w-full ">
        <h2 className="">Testimonials</h2>
        <p className="text-sm text-center font-normal leading-normal text-neutral-700">
          What our student say about us
        </p>
      </div>
      <div className=" course-container flex items-center justify-center flex-wrap gap-4">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
