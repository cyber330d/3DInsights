
import Image from "next/image";
import LinkComponent from "./LinkComponent";


export default function Hero(props: { className?: string | undefined }) {
  return (
    <div className="w-full h-screen relative flex items-start justify-between">
      <div
        className="flex flex-col gap-4 rounded-lg text-white
        font-semibold z-10 p-2 absolute justify-center h-[40vh] text-balance
         bg-black min-[400px]:opacity-95 sm:opacity-70 mx-auto left-1/2 transform -translate-x-1/2
        bottom-0 w-full sm:w-4/5 sm:bottom-[8%] md:bottom-[15%] md:w-4/6 lg:w-2/5"
      >
        <h1 className="text-xl min-[440px]:text-3xl flex flex-col justify-center items-center ">
          <span className="">Learn Complex</span>
          <span className="">Concepts</span>
        </h1>
        <h2 className="text-base min-[440px]:text-xl self-center text-center">
          {/* text-3xl */}
          using 3D Models and Visualizations
        </h2>
        <div className="self-center max-w-80 ">
          <LinkComponent
            to="/"
            label="Get Started"
            className="text-white w-52 rounded-lg bg-lms-green flex flex-row items-center justify-center box-border text-xs  p-3 hover:text-black "
          />
        </div>
      </div>

      <div className=" w-full h-[60vh] sm:h-full absolute top-16 bottom-0 left-0 right0  ">
        <Image
          src="/h71.png"
          width="1280"
          height="1280"
          objectFit="cover"
          alt="hero-model"
          className="w-full h-full border-none "
        />
      </div>
    </div>
  );
}