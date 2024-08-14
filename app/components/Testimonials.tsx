import Image from "next/image";
import CourseCard from "./CourseCard";
import LinkComponent from "./LinkComponent";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-12 py-10 shadow bg-green-100 w-full">
      <div className="flex flex-col items-center justify-center gap-4 text-3xl  leading-10 p-6 bg-green-50 w-full ">
        <h2 className="">Testimonials</h2>
        <p className="text-base font-normal leading-normal text-neutral-700 ">
          What our student say about us
        </p>
      </div>
      <div className=" course-container flex items-center grid-cols-4 justify-center gap-4 flex-wrap">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
