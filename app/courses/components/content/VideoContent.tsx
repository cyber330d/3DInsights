// components/VideoContent.tsx

type VideoContentProps = {
  url: string;
  title: string;
};

export default function VideoContent({ url, title }: VideoContentProps) {
  return (
    <div className="h-[60vh] w-full box-border ">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src={url}
        title={title}
        allowFullScreen
      ></iframe>
    </div>
  );
}
