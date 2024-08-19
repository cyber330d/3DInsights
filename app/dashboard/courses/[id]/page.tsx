"use client";

import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CourseEditor from "./CourseEditor";
import CourseCreationComponents from "./CourseCreationComponents";

export default function Page() {
  const handleOnDragEnd = (result: any) => {
    // Handle the logic of what happens when a component is dropped in the content area
    if (!result.destination) return;

    // Add your custom logic here for handling the drag and drop
    console.log("Dragged component:", result.draggableId);
    console.log("Dropped at:", result.destination.index);
  };

  return (
    <div className="flex h-full w-full bg-slate-100 -ml-8 pl-8">
      {/* Main Content Area */}
      <div className="w-3/4 p-4 flex flex-col space-y-4">
        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Preview
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Publish
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete Course
          </button>
        </div>

        {/* Drag and Drop Context */}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="content-area">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex-grow border border-dashed border-gray-300 p-6 rounded-lg bg-white"
              >
                <p className="text-gray-500 text-center mb-4">
                  Drag components here to build your course.
                </p>
                {/* Example component that could be added by drag and drop */}
                <CourseEditor />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {/* Sidebar with Course Components */}
      <CourseCreationComponents />
    </div>
  );
}
