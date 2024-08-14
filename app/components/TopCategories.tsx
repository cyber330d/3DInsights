import Image from "next/image";
import CourseCard from "./CourseCard";
import LinkComponent from "./LinkComponent";
import CategoryCard from "./CategoryCard";

export default function TopCategories() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-12 px-12 py-10 shadow w-full">
      <div className="flex flex-col items-center justify-center gap-4 text-3xl  leading-10 ">
        <h2 className="">Top Categories</h2>
        <p className="text-base font-normal leading-normal text-neutral-700">
          1,000+ unique online course list design.
        </p>
      </div>
      <div className="course-container flex items-center grid-cols-8 justify-center gap-4 flex-wrap">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
