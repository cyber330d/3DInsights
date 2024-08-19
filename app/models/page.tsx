import React from "react";
// import { models } from "@/app/models"; // Adjust this path based on your actual file structure
import ThreeDModelViewer from "@/app/courses/components/content/ThreeDModelViewer";
 // models.ts

const models = [
  "/models/dna.glb",
  "/models/dna3.glb",
  "/models/m2.glb",
  "/models/m3.glb",
  "/models/molecule4.glb",
  "/models/atom/scene.gltf",
  "/models/car1/scene.gltf",
  "/models/digestive1/scene.gltf",
  "/models/dna/scene.gltf",
  "/models/dna2/scene.gltf",
  "/models/dna3/scene.gltf",
  "/models/engine1/scene.gltf",
  "/models/engine3/scene.gltf",
  "/models/enginev8/scene.gltf",
  "/models/m1/scene.gltf",
  "/models/molecule1/scene.gltf",
  "/models/molecule2/scene.gltf",
];
 
export default function Page() {
  return (
  
    <div className="p-6 space-y-12 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center text-lms-green mb-8">
        3D Models Viewer
      </h1>
      {models.map((modelUrl, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-medium mb-4 text-center">
            Model {index + 1}
          </h2>
          <ThreeDModelViewer model={{ url: modelUrl }} />
        </div>
      ))}
    </div>
  );
}


