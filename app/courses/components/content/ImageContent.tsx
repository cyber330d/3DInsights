// components/ImageContent.tsx

import Image from "next/image";

type ImageContentProps = {
  url: string;
  title: string;
  caption?: string;
};

export default function ImageContent({ url, title, caption }: ImageContentProps) {
  return (
    <div className="h-[70vh] ">
      <Image
        width="1280"
        height="730"
        src={url}
        alt={title}
        className="w-full h-full rounded"
      />
      {caption && (
        <p className="bg-white bg-opacity-70 px-4 py-2 text-lg rounded-lg shadow-md">
          {caption}
        </p>
      )}
    </div>
  );
}
