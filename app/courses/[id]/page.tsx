"use client";
import { useRouter, usePathname } from "next/navigation";
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
  price: number | string;
  image: string;
};

export default function Page() {
  const [course, setCourse] = useState<Course | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Extract the course ID from the pathname
    const id = pathname?.split("/")[2];

    // Find the course by ID
    const foundCourse = courses.find((course) => course.id === id);

    // If the course exists, redirect to the about page
    if (foundCourse) {
      router.push(`/courses/${foundCourse.id}/about`);
    } else {
      // Handle case where course is not found (optional)
      console.error("Course not found");
    }
  }, [pathname, router]);

  return <div className="p-6 pt-3 mb-6 mt-8">Redirecting...</div>;
}
