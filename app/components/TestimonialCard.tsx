import Image from "next/image";
import LinkComponent from "./LinkComponent";
import Link from "next/link";

export default function CourseCard() {
  return (
    <div className="w-1/5  rounded-2xl shadow flex flex-col gap-4 bg-white hover:brightness-95 p-8">
      <div className="image w-full flex items-center justify-between">
        <div className="image w-12 h-12 flex items-center justify-center">
          <Image
            src="/h23.jpeg"
            width="200"
            height="200"
            objectFit="cover"
            alt="course name"
            className="w-full h-full border-none  rounded-full"
          />
        </div>
        <p className="name text-base">Derek lactovokta</p>
      </div>

      <p className="text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ratione
        adipisci inventore quia odio placeat fugiat commodi reiciendis iure?
        Aperiam ipsum quibusdam eligendi, rem nam blanditiis. Quia voluptate
        tempore hic?
      </p>
      <div className="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
    </div>
  );
}
