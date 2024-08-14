import Image from "next/image";
import LinkComponent from "./LinkComponent";
import Link from "next/link";


export default function CategoryCard() {
  return (
    <div className="w-1/8 h-60 w-44 rounded-2xl shadow  bg-white hover:brightness-95">
      <Link href="/courses/">
        <div className="image w-full h-1/2">
          <Image
            src="/h23.jpeg"
            width="600"
            height="400"
            objectFit="cover"
            alt="Category name"
            className="w-full h-full border-none rounded-t-2xl "
          />
        </div>
        <div className="details flex flex-col justify-center items-center w-full h-1/2 p-4 gap-2 text-neutral-600">
          <p className="text-xl font-medium leading-p">Engineering</p>
          <p className="text-base font-normal leading-normal">100 Courses</p>
        </div>
      </Link>
    </div>
  );
}
