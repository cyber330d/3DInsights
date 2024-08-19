"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Suspense } from "react";

interface ThreeDModelViewerProps {
  model: {
    url: string;
  };
}

const backgroundColors = {
  white: 0xffffff,
  grey: 0x808080,
  black: 0x000000,
  intermediate: 0x404040,
};

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({ model }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [backgroundColor, setBackgroundColor] = useState<THREE.Color>(
    new THREE.Color(backgroundColors.white)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Set background color
    scene.background = backgroundColor;

    // Set up lighting
    const light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.enablePan = true;

    // Determine the loader based on the file extension
    const getFileExtension = (url: string) => {
      return url.split(".").pop()?.toLowerCase();
    };

    const fileExtension = getFileExtension(model.url);

    let loader;
    switch (fileExtension) {
      case "glb":
      case "gltf":
        loader = new GLTFLoader();
        break;
      case "obj":
        loader = new OBJLoader();
        break;
      case "fbx":
        loader = new FBXLoader();
        break;
      default:
        console.error("Unsupported model type:", fileExtension);
        return;
    }

    loader.load(
      model.url,
      (loadedModel) => {
        scene.add(loadedModel.scene || loadedModel);
        camera.position.z = 5;
        setLoading(false); // Model loaded
        animate();
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
        setLoading(false); // Ensure loading is false on error
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };

    // Handle container resize
    const onResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", onResize);

    // Clean up
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", onResize);
    };
  }, [model, backgroundColor]);

  return (
    <div className="three-d-model-viewer h-[70vh] w-full rounded bg-slate-200">
      <div className="relative w-full h-full" ref={containerRef}>
        {loading && (
          <div className="absolute  inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="text-white animate-pulse">Loading Model...</div>
          </div>
        )}
        {/* 3D Model will be rendered here */}
      </div>
      <div className="flex gap-2 mt-2 ">
        {Object.keys(backgroundColors).map((color) => (
          <button
            key={color}
            onClick={() =>
              setBackgroundColor(new THREE.Color(backgroundColors[color]))
            }
            className="p-2 rounded"
            style={{ backgroundColor: backgroundColors[color] }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThreeDModelViewer;
