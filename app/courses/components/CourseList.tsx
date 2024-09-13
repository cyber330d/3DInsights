// /components/CourseList.tsx
import { useRouter } from "next/navigation";
import React from "react";
import CourseCard from "./CourseCard";
import { courses } from "@/app/data/db";


type Course = {
  id: string;
  name: string;
  image: string;
  level: string;
  duration: string;
  price: number | string;
};

type CourseListProps = {
  courses: Course[];
};

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const router = useRouter();

  const handleCourseClick = (id: string) => {
    router.push(`/courses/${id}/about`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
      {courses.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>
  );
};

export default CourseList;
