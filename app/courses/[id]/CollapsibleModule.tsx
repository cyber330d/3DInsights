// CollapsibleModule.tsx
import { useState } from "react";
import Link from "next/link";
import { Circle, CircleCheck, CircleChevronUp,CircleChevronDown } from "lucide-react";

interface Module {
  title: string;
  id: string;
  completed: boolean;
  submodules?: Module[]; // Allows nested modules
}

const CollapsibleModule: React.FC<{ module: Module }> = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-2 font-medium flex justify-between items-center bg-green-50 hover:bg-green-100 rounded-md"
      >
        <span className="flex items-center">
          {module.completed ? (
            <CircleCheck className="text-lms-green mr-2" />
          ) : (
            <Circle className="text-gray-300 mr-2" />
          )}
          {module.title}
        </span>
        {module.submodules && (
          <span className="text-sm text-gray-500">
            {isOpen ? (
              <CircleChevronUp className="text-lms-green" />
            ) : (
              <CircleChevronDown className="text-lms-green" />
            )}
          </span>
        )}
      </button>

      {isOpen && module.submodules && (
        <ul className="pl-6 space-y-2">
          {module.submodules.map((submodule) => (
            <CollapsibleModule key={submodule.id} module={submodule} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CollapsibleModule;
