import { courseData } from "@/app/data/courseData";
import ImageContent from "@/app/courses/components/content/ImageContent";
import AudioContent from "@/app/courses/components/content/AudioContent";
import VideoContent from "@/app/courses/components/content/VideoContent";
import TextContent from "@/app/courses/components/content/TextContent";
import ThreeDModelViewer from "@/app/courses/components/content/ThreeDModelViewer";

export default function Page() {
  if (!courseData || !courseData.content) {
    return (
      <div className="flex items-center justify-center bg-slate-300 w-full h-screen text-4xl mt-8 rounded-lg text-lms-green p-32">
        No course data available.
      </div>
    );
  }

  return (
    <div className="p-6 pt-3 mt-16 w-full flex-col flex gap-4 box-border max-w-screen-lg">
      <h1 className="text-4xl font-medium mb-6 text-center text-lms-green">
        {courseData.title}
      </h1>

      {courseData.content.map((item, index) => {
        switch (item.type) {
          case "text":
            return (
              <TextContent
                key={index}
                title={item.title}
                body={item.body || ""}
              />
            );
          case "image":
            return (
              <ImageContent
                key={index}
                url={item.url || ""}
                title={item.title}
                caption={item.caption}
              />
            );
          case "audio":
            return (
              <AudioContent
                key={index}
                url={item.url || ""}
                title={item.title}
              />
            );
          case "video":
            return (
              <VideoContent
                key={index}
                url={item.url || ""}
                title={item.title}
              />
            );
          case "3dmodel":
            // Provide default values for the model prop
            const model = item.model ?? { url: "", type: "" };
            return <ThreeDModelViewer key={index} model={model} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
