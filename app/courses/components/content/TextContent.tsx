// components/TextContent.tsx

type TextContentProps = {
  title: string;
  body: string;
};

export default function TextContent({ title, body }: TextContentProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-lms-green">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
}
