import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getModelFromDB, saveModelToDB } from "@/lib/idb";
import ThreeDModelViewer from "@/app/courses/components/content/ThreeDModelViewer";

interface ModelComponentProps {
  modelUrl: string;
}

const ModelComponent: React.FC<ModelComponentProps> = ({ modelUrl }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [modelBlob, setModelBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModel = async () => {
      setLoading(true);

      // Check if the model is already cached
      const cachedModel = await getModelFromDB(modelUrl);
      if (cachedModel) {
        setModelBlob(cachedModel);
        setLoading(false);
      } else {
        // Fetch the model from network
        const response = await fetch(modelUrl);
        const blob = await response.blob();
        setModelBlob(blob);
        await saveModelToDB(modelUrl, blob); // Cache the model
        setLoading(false);
      }
    };

    if (inView) {
      fetchModel();
    }
  }, [modelUrl, inView]);

  return (
    <div ref={ref} className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-medium mb-4 text-center">
        Model {modelUrl.split("/").pop()}
      </h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        modelBlob && (
          <ThreeDModelViewer model={{ url: URL.createObjectURL(modelBlob) }} />
        )
      )}
    </div>
  );
};

export default ModelComponent;


