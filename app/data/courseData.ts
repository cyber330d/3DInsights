// courseData.ts (Assuming this is the file)

export const courseData = {
  id: 1,
  title: "Advanced 3D Modeling",
  content: [
    {
      type: "text",
      title: "Introduction",
      body: "Welcome to the advanced 3D modeling course. In this section, you will learn...",
    },
    {
      type: "image",
      title: "Model Showcase",
      url: "/h13.jpeg",
      caption: "An example of a complex 3D model.",
    },
    {
      type: "audio",
      title: "Course Audio",
      url: "/audio/sample-audio.mp3",
    },
    {
      type: "video",
      title: "Course Overview",
      url: "/videos/lmsv1.mp4",
    },
    {
      type: "3dmodel",
      title: "Interactive 3D Model",
      model: {
        // url: "/models/engine1/scene.gltf",
        // url: "/models/engine3/scene.gltf",
        url: "/models/enginev8/scene.gltf",

        type: "gltf",
      },
    },
  ],
};
