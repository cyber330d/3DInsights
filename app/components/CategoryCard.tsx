import Image from "next/image";
import LinkComponent from "./LinkComponent";
import Link from "next/link";


export default function CategoryCard() {
  return (
    <div className="w-[70px] h-20 md:w-[14%] md:h-44 rounded md:rounded-lg shadow  bg-white hover:brightness-95">
      <Link href="/courses/">
        <div className="image w-full h-1/2">
          <Image
            src="/h23.jpeg"
            width="600"
            height="400"
            objectFit="cover"
            alt="Category name"
            className="w-full h-full border-none rounded md:rounded-t-2xl "
          />
        </div>
        <div className="details flex flex-col justify-center items-center w-full h-1/2 p-0 md:p-4 gap-1 md:gap-2 text-neutral-600">
          <p className="text-[10px] text-nowrap md:text-base  font-medium md:leading-p">
            Engineering
          </p>
          <p className="text-[8px] text-nowrap md:text-xs font-normal md:leading-normal">
            100 Courses
          </p>
        </div>
      </Link>
    </div>
  );
}
