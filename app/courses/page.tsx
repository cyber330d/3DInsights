"use client";
import React, { useState } from "react";
import CourseFilters from "@/app/components/courses/CourseFilters";
import CourseSearchBar from "@/app/components/courses/CourseSearchBar";
import CourseList from "@/app/components/courses/CourseList";
import { courses } from "@/app/data/db";

export default function Page() {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [showSidebar, setShowSidebar] = useState(true);

  const filterCourses = (filters: { [key: string]: string[] }) => {
    const filtered = courses.filter(
      (course) =>
        (!filters.level.length || filters.level.includes(course.level)) &&
        (!filters.category.length ||
          filters.category.includes(course.category)) &&
        (!filters.tags.length ||
          filters.tags.some((tag) => course.tags.includes(tag)))
    );
    setFilteredCourses(filtered);
  };

  const searchCourses = (query: string) => {
    const searched = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourses(searched);
  };

  return (
    <div className="flex flex-row pt-16">
      {/* Sidebar Section */}
      {showSidebar && (
        <div className="w-full md:w-1/4 bg-gray-100 p-4 transition-all">
          <CourseFilters onFilter={filterCourses} />
        </div>
      )}

      {/* Main Content Section */}
      <div
        className={`flex-1 flex flex-col p-4 transition-all duration-300 ${
          showSidebar ? "md:w-3/4" : "md:w-full"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="block mb-4 bg-lms-green text-white py-2 px-4 rounded-lg absolute left"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Search and Course List */}
        <CourseSearchBar onSearch={searchCourses} />
        <CourseList courses={filteredCourses} />
      </div>
    </div>
  );
}
