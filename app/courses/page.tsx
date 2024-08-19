"use client";
import React, { useState } from "react";
import CourseFilters from "@/app/courses/components/CourseFilters";
import CourseSearchBar from "@/app/courses/components/CourseSearchBar";
import CourseList from "@/app/courses/components/CourseList";
import { courses } from "@/app/data/db";
import { Filter } from "lucide-react";

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
    <div className="flex flex-row scroll-smooth">
      {/* Sidebar Section */}
      {showSidebar && (
        <div className="w-full md:w-1/4 p-4 transition-all">
          <CourseFilters onFilter={filterCourses} />
        </div>
      )}

      {/* Main Content Section */}
      <div
        className={`flex-1 flex flex-col p-4 transition-all duration-300 ${
          showSidebar ? "md:w-3/4" : "md:w-full justify-center items-center"
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-between w-full">
          <CourseSearchBar onSearch={searchCourses} />
          <button
            className="flex bg-lms-green items-start justify-end  sm:w-1/3 self-end gap-1 text-base  mb-4 py-2 px-4 rounded  text-white max-w-28"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Filter className="text-white" />
            Filters
          </button>
        </div>
        <div className="w-full text-3xl p-4 pt-2 font-light">Courses</div>
        <CourseList courses={filteredCourses} />
      </div>
    </div>
  );
}
