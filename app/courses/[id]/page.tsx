// /app/courses/[id]/page.tsx
"use client"
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { courses } from "@/app/data/db";
import Image from "next/image";

// Define the Course type
type Course = {
  id: string;
  name: string;
  description: string;
  level: string;
  duration: string;
  category: string;
  tags: string[];
  price: number;
  image: string;
};

export default function Page() {
  // const pathname = usePathname();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const [course, setCourse] = useState<Course | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundCourse = courses.find((c) => c.id === id);
      setCourse(foundCourse);
    }
  }, [id]);

  if (!id) {
    return <div>Loading...</div>; // Handle case where id is undefined
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-8 pt-18 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Image
          src={course.image}
          alt={course.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
        <p className="text-lg mb-4">{course.description}</p>
        <p className="text-black">Level: {course.level}</p>
        <p className="text-black">Duration: {course.duration}</p>
        <p className="text-black">Category: {course.category}</p>
        <p className="text-black">Tags: {course.tags.join(", ")}</p>
        <p className="text-2xl font-bold mt-6">${course.price}</p>
      </div>
    </div>
  );
}
