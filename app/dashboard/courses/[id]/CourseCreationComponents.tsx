import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Image as ImageIcon,
  Headphones,
  Video,
  Book as TextIcon,
  Link as LinkIcon,
  FileQuestion,
  CircleHelp,
  LucideBookOpenText,
  Box,
  Move3D
} from "lucide-react";

const components = [
  { name: "Image", icon: <ImageIcon size={20} /> },
  { name: "Audio", icon: <Headphones size={20} /> },
  { name: "Video", icon: <Video size={20} /> },
  { name: "3D Model", icon: <Box size={20} /> },
  { name: "Files", icon: <FileQuestion size={20} /> },
  { name: "Text", icon: <TextIcon size={20} /> },
  { name: "Links", icon: <LinkIcon size={20} /> },
  { name: "Assessment", icon: <CircleHelp size={20} /> },
  { name: "Chapter", icon: <LucideBookOpenText size={20} /> },
];

export default function CourseCreationComponents() {
  return (
    <div className="w-64 bg-green-50 p-4 pr-0 fixed right-0 flex flex-col items-center ">
      <h2 className="text-xl font-semibold mb-4">Course Components</h2>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="components">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="max-h-[90vh]"
            >
              {components.map((component, index) => (
                <Draggable
                  key={component.name}
                  draggableId={component.name}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 cursor-pointer mb-4 flex gap-2 items-center"
                    >
                      <span className="mr-2">{component.icon}</span>
                      <p className="text-gray-700 text-center">
                        {component.name}
                      </p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
