
import Image from "next/image";
import LinkComponent from "./LinkComponent";


export default function Hero(props: { className?: string | undefined }) {
  return (
    // hero
    <div className="w-full h-screen relative flex items-start justify-between overflow-hidden">
      {/* <div className="flex flex-col gap-8 drop-shadow-lg text-lms-green2 border-collapse font-bold z-10  p-8 ml-20 mt-44 items-center justify-center text-balance bg-black opacity-70 rounded-lg"> */}
      <div className="flex flex-col gap-8 drop-shadow-lg rounded-lg text-white border-collapse font-bold z-10  p-8 absolute top-36 right-28 text-balance items-center justify-center bg-black opacity-70">
        <h1 className="text-7xl flex flex-col justify-center ">
          <span className="">Learn Complex</span>
          <span className="self-center">Concepts</span>
        </h1>
        <h2 className="text-3xl self-start">
          using 3D Models and Visualizations
        </h2>
        <div className="">
          <LinkComponent
            to="/"
            label="Get Started"
            className="!text-white rounded-lg !bg-lms-green w-60 flex flex-row items-center justify-center px-4 py-4 box-border text-base"
          />
        </div>
      </div>

      <div className=" w-full h-full absolute top-20 bottom-0 left-0 right0  ">
        <Image
          src="/h70 (16).png"
          // layout="fill"
          width="1280"
          height="1280"
          objectFit="cover" // width="1600"
          // height="1800"
          alt="hero-model"
          className="w-full h-full border-none "
        />
      </div>
    </div>
  );
}