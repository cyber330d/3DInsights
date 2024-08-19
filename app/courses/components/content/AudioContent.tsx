// components/AudioContent.tsx

type AudioContentProps = {
  url: string;
  title: string;
};

export default function AudioContent({ url, title }: AudioContentProps) {
  return (
    <div className="bg-white p-4 mt-12 rounded-lg shadow-lg w-full h-30">
      <h2 className="text-xl font-semibold mb-4 text-lms-green">{title}</h2>
      <audio controls className="w-full">
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
