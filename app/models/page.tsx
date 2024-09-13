"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Define your dynamic import for ThreeDModelViewer
const ThreeDModelViewer = dynamic(
  () => import("@/app/courses/components/content/ThreeDModelViewer"),
  {
    ssr: false,
  }
);

// List of model URLs and descriptions
const models = [
  {
    url: "/models/dna.glb",
    name: "DNA Protein",
    description:
      "DNA Protein model shows the structure of DNA, which is fundamental in genetics and molecular biology, helping students understand genetic information and molecular interactions.",
  },
  {
    url: "/models/dna3.glb",
    name: "DNA Strand",
    description:
      "DNA Strand model illustrates the double helix structure of DNA, crucial for understanding genetic inheritance and molecular biology concepts in STEM education.",
  },
  {
    url: "/models/m2.glb",
    name: "Germinating Seed",
    description:
      "Germinating Seed model demonstrates the process of seed germination, an essential concept in biology that helps in understanding plant growth and development.",
  },
  {
    url: "/models/molecule4.glb",
    name: "Heart",
    description:
      "Heart model shows the anatomy of the human heart, vital for studying cardiovascular biology and understanding how the heart functions in the human body.",
  },
  {
    url: "/models/atom/scene.gltf",
    name: "Atom",
    description:
      "Atom model represents the basic unit of matter, essential for teaching chemistry and physics, and understanding atomic structure and bonding.",
  },
  {
    url: "/models/car1/scene.gltf",
    name: "Modern Car",
    description:
      "Modern Car model illustrates the design and engineering of contemporary automobiles, useful for studying mechanical engineering and automotive technology.",
  },
  {
    url: "/models/digestive1/scene.gltf",
    name: "Digestive System",
    description:
      "Digestive System model displays the anatomy of the human digestive system, crucial for understanding human physiology and digestive processes.",
  },
  {
    url: "/models/engine1/scene.gltf",
    name: "Engine Gear Teeth",
    description:
      "Engine Gear Teeth model shows the mechanics of engine gears, important for studying mechanical engineering and understanding engine functionality.",
  },
  {
    url: "/models/engine3/scene.gltf",
    name: "Complete Heavy Engine and Air Filters",
    description:
      "Complete Heavy Engine model provides a detailed view of heavy engine components and air filters, essential for advanced studies in automotive engineering.",
  },
  {
    url: "/models/enginev8/scene.gltf",
    name: "V8 Engine",
    description:
      "V8 Engine model illustrates the design and operation of a V8 engine, important for automotive engineering and understanding complex engine systems.",
  },
  {
    url: "/models/molecule1/scene.gltf",
    name: "Molecules",
    description:
      "Molecules model shows different molecular structures, fundamental for studying chemistry and understanding molecular interactions in STEM education.",
  },
];

export default function Page() {
  // State to manage the currently selected model
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <div className="p-6 bg-gray-50 relative">
      <h1 className="text-3xl font-semibold text-center text-lms-green mb-8">
        3D Models Viewer
      </h1>

      {/* Fixed Description Card */}
      <div className="fixed top-[30%] left-10 p-4 pt-6  bg-black bg-opacity-90 text-white w-3/12 h-auto rounded z-20">
        <h2 className="text-lg font-semibold mb-4  text-white ">
          Model Information
        </h2>
        <p className=" text-white ">{selectedModel.description}</p>
      </div>

      {/* Model Selector */}
      <div className=" bg-white shadow-md p-4 z-10">
        <div className="flex overflow-x-auto space-x-4">
          {models.map((model) => (
            <button
              key={model.url}
              onClick={() => setSelectedModel(model)}
              className={`px-4 py-2 rounded-md text-white ${
                selectedModel.url === model.url ? "bg-lms-green" : "bg-black opacity-70"
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>
      </div>

      {/* Model Viewer */}
      <div className="">
        <div className="rounded-lg bg-white">
          <h2 className="text-xl font-medium mb-4 text-center">
            {selectedModel.name}
          </h2>
          <ThreeDModelViewer model={{ url: selectedModel.url }} />
        </div>
      </div>
    </div>
  );
}
