import Image from "next/image";

export default function Logo(props: { className?: string | undefined }) {
  return (
    <div className="w-full flex items-center justify-start h-full text-lms-green cursor-pointer">
      <Image src="/logo.png" width="150" height="75" alt="3dInsights logo" />
    </div>
  );
}
