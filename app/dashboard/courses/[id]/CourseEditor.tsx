import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CourseEditor: React.FC = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="flex-grow min-h-[50vh]  p-4  border border-dashed border-gray-300 rounded-lg">
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        placeholder="Compose your course content here..."
        className="min-h-[50vh] border-none"
      />
    </div>
  );
};

export default CourseEditor;
