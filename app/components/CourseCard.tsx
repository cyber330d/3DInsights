import Image from "next/image";
import LinkComponent from "./LinkComponent";
import Link from "next/link";

export default function CourseCard() {
  return (
    <div className="rounded-lg shadow w-60 h-72 bg-white hover:brightness-95">
      <Link href="/courses/">
        <div className="image w-full h-1/2 ">
          <Image
            src="/h75.jpeg"
            width="600"
            height="400"
            objectFit="cover"
            alt="course name"
            className="w-full h-full border-none  rounded"
          />
        </div>
        <div className="details flex flex-col justify-start items-start w-full h-1/2 p-6 gap-4">
          <p className="font-semibold text-[1.125rem] leading-9 tracking-tighter text-neutral-600">
            Integrated Sciences
          </p>
          <div className="flex items-center justify-between w-full text-neutral-500">
            <span className="text-sm">6hours</span>
            <span className="text-sm">Beginner</span>
          </div>
          <div className="flex items-center justify-between w-full ">
            <span className="text-sm text-neutral-500"> &#x20A6;1,000</span>
            <Link
              href="/courses/"
              className="hover:underline text-sm underline-offset-4 hover:text-lms-green"
            >
              View More
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
