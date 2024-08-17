import Image from "next/image";
import LinkComponent from "./LinkComponent";
import Link from "next/link";


export default function CategoryCard() {
  return (
    <div className="w-20 h-20 md:w-32 md:h-40 rounded md:rounded-lg shadow  bg-white hover:brightness-95">
      <Link href="/courses/">
        <div className="image w-full h-1/2">
          <Image
            src="/h23.jpeg"
            width="600"
            height="400"
            objectFit="cover"
            alt="Category name"
            className="w-full h-full border-none rounded md:rounded-t-xl "
          />
        </div>
        <div className="details flex flex-col justify-center items-start w-full h-1/2 p-1 md:p-2 lg:p-4 gap-1 md:gap-2 text-neutral-600">
          <p className="text-[10px] md:text-base">
            Engineering
          </p>
          <p className="text-[8px] md:text-xs">
            100 Courses
          </p>
        </div>
      </Link>
    </div>
  );
}
