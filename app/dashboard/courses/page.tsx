"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Course {
  id: number;
  name: string;
  progress?: number; // Optional for created courses
  imageUrl: string;
  enrolledStudents?: number; // Optional for enrolled courses
}

const enrolledCourses: Course[] = [
  {
    id: 1,
    name: "Online Education",
    progress: 100,
    imageUrl: "/about3.jpeg",
  },
  {
    id: 2,
    name: "Electrical Transformers",
    progress: 40,
    imageUrl: "/h89.jpeg",
  },
  {
    id: 3,
    name: "Digital Circuit Design",
    progress: 10,
    imageUrl: "/h90.jpeg",
  },
];

const createdCourses: Course[] = [
  {
    id: 1,
    name: "Ahmadu Bello University Zaria",
    enrolledStudents: 25,
    imageUrl: "/abu.png",
  },
  {
    id: 2,
    name: "Machines Power and Installations",
    enrolledStudents: 40,
    imageUrl: "/h74.png",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<"enrolled" | "manage">("enrolled");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Courses</h1>

      {/* Tabs for navigation */}
      <div className="flex justify-center mb-8 gap-10">
        <button
          onClick={() => setActiveTab("enrolled")}
          className={`px-6 py-2 text-lg font-medium ${
            activeTab === "enrolled"
              ? "bg-lms-green text-white"
              : "bg-gray-100 text-gray-700"
          } rounded-t-lg hover:bg-lms-green transition`}
        >
          Enrolled Courses
        </button>
        <button
          onClick={() => setActiveTab("manage")}
          className={`px-6 py-2 text-lg font-medium ${
            activeTab === "manage"
              ? "bg-lms-green text-white"
              : "bg-gray-200 text-gray-700"
          } rounded-t-lg hover:bg-lms-green transition`}
        >
          Manage Courses
        </button>
        <Link href={`/dashboard/courses/new-course`}>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Create New Course
          </button>
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        {activeTab === "enrolled" ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {enrolledCourses.map((course) => (
                <li
                  key={course.id}
                  className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4"
                >
                  <Image
                    src={course.imageUrl}
                    alt={course.name}
                    width={400} // Adjust the width as needed
                    height={250} // Adjust the height as needed
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{course.name}</h3>
                    <p className="text-gray-600 mt-2">
                      Progress: {course.progress}%
                    </p>
                    <div className="h-2 bg-gray-200 rounded mt-2">
                      <div
                        className="h-full bg-lms-green rounded"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Manage Courses</h2>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Your Courses</h3>
              <Link href={`/dashboard/courses/new-course`}>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Create New Course
                </button>
              </Link>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {createdCourses.map((course) => (
                <li
                  key={course.id}
                  className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4"
                >
                  <Image
                    src={course.imageUrl}
                    alt={course.name}
                    width={400} // Adjust the width as needed
                    height={250} // Adjust the height as needed
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{course.name}</h3>
                    <p className="text-gray-600 mt-2">
                      Enrolled Students: {course.enrolledStudents}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
