// /components/CourseList.tsx
import { useRouter } from "next/navigation";
import React from "react";

type Course = {
  id: string;
  name: string;
  image: string;
  level: string;
  duration: string;
  price: number;
};

type CourseListProps = {
  courses: Course[];
};

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const router = useRouter();

  const handleCourseClick = (id: string) => {
    router.push(`/courses/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleCourseClick(course.id)}
        >
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-48 object-cover"
          />
          <div className="flex-col flex p-4 gap-2">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-sm text-neutral-600">
              Duration: {course.duration}
            </p>
            <p className="text-sm text-neutral-600">Level: {course.level}</p>
            <p className="text-lg font-bold mt-2">${course.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
