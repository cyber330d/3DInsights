// mock-api/courses/[id].js

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
      url: "/models/dna.glb",
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
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      type: "3dmodel",
      title: "Interactive 3D Model",
      model: {
        url: "/models/engine1/scene.gltf",
        type: "gltf",
      },
    },
  ],
};
