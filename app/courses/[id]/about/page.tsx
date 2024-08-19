"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import courseData from "./data.json"; // Import the JSON file directly

// Simulated user data (e.g., could be fetched from auth context)
const simulatedUserId = "user123";

// Simulated enrollment database
const enrolledUsers: { [key: string]: number[] } = {
  // User ID mapped to an array of course IDs they are enrolled in
  user123: [1], // Example user already enrolled in course with ID 1
};

export default function AboutPage() {
  const [course, setCourse] = useState<any>(null);
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);

  useEffect(() => {
    // Get the first item in the courseData array
    const firstCourse = courseData[0];
    setCourse(firstCourse);

    // Check if the simulated user is enrolled in this course
    if (
      firstCourse &&
      enrolledUsers[simulatedUserId]?.includes(firstCourse.id)
    ) {
      setIsEnrolled(true);
    }
  }, []);

  const handleEnroll = () => {
    // Enroll the user in the course
    if (course && !isEnrolled) {
      if (!enrolledUsers[simulatedUserId]) {
        enrolledUsers[simulatedUserId] = [];
      }
      enrolledUsers[simulatedUserId].push(course.id);
      setIsEnrolled(true);
      alert("You have successfully enrolled in the course!");
    }
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center bg-slate-300 w-full h-screen text-4xl mt-8 rounded-lg text-lms-green p-32">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 pt-3 mt-8">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <Image
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
          width={800}
          height={300}
        />
        <h1 className="text-4xl font-bold mt-6 text-lms-green">
          {course.title}
        </h1>
        <p className="text-lg mt-4 text-gray-700">{course.description}</p>
      </div>

      {/* Enrollment Section */}
      <div className="flex justify-center mb-10">
        {isEnrolled ? (
          <button className="bg-lms-green text-white px-6 py-3 rounded-lg text-lg">
            Continue Learning
          </button>
        ) : (
          <button
            onClick={handleEnroll}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
          >
            Enroll Now
          </button>
        )}
      </div>

      {/* Course Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Level</h2>
          <p className="text-gray-600">{course.level}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Category</h2>
          <p className="text-gray-600">{course.category}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Duration</h2>
          <p className="text-gray-600">{course.duration}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Start Time</h2>
          <p className="text-gray-600">
            {new Date(course.startTime).toLocaleDateString()}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Deadline</h2>
          <p className="text-gray-600">
            {new Date(course.deadline).toLocaleDateString()}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-1">
            {course.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="text-sm bg-lms-green text-white px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Instructors Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Instructors
        </h2>
        <div className="flex flex-wrap gap-6">
          {course.instructors.map((instructor: any, index: number) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full mx-auto"
                  width={96}
                  height={96}
                />
                <h3 className="text-xl font-bold mt-4">{instructor.name}</h3>
                <p className="text-gray-600 mt-2">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">{course.overview}</p>
      </div>

      {/* Summary Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Summary</h2>
        <p className="text-gray-700 leading-relaxed">{course.summary}</p>
      </div>

      {/* Course Outline Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Course Outline
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          {course.courseOutline.map((item: any, index: number) => (
            <li key={index}>
              <strong>Week {item.week}:</strong> {item.topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Learning Outcomes Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          What You Will Learn
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          {course.learningOutcomes.map((outcome: string, index: number) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </div>

      {/* Assessments Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Assessments
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          {course.assessments.map((assessment: string, index: number) => (
            <li key={index}>{assessment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
