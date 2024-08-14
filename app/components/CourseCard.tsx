import Image from "next/image";
import LinkComponent from "./LinkComponent";
import Link from "next/link";

export default function CourseCard() {
  return (
    <div className="w-1/5  rounded-2xl shadow  bg-white hover:brightness-95">
      <Link href="/courses/">
        <div className="image w-full h-1/2 ">
          <Image
            src="/h75.jpeg"
            width="600"
            height="400"
            objectFit="cover"
            alt="course name"
            className="w-full h-full border-none  rounded-t-2xl"
          />
        </div>
        <div className="details flex flex-col justify-start items-start w-full h-1/2 p-6 gap-4">
          <p className="font-semibold text-2xl leading-9 tracking-tighter text-neutral-600">
            Integrated Sciences
          </p>
          <div className="flex items-center justify-between w-full text-neutral-500">
            <span className="">6hours</span>
            <span className="">Beginner</span>
          </div>
          <div className="flex items-center justify-between w-full ">
            <span className=" text-neutral-500"> &#x20A6;1,000</span>
            <Link
              href="/courses/"
              className="hover:underline underline-offset-4 hover:text-lms-green"
            >
              View More
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
