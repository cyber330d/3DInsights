"use client";
import { useState } from "react";

export default function Assessment() {
  const [assessments] = useState([
    {
      id: 1,
      name: "Quiz 1",
      type: "Quiz",
      deadline: "2024-08-25",
      status: "Completed",
      grade: "A",
    },
    {
      id: 2,
      name: "Assignment 2",
      type: "Assignment",
      deadline: "2024-08-20",
      status: "Pending",
      grade: "N/A",
    },
    {
      id: 3,
      name: "Midterm Exam",
      type: "Exam",
      deadline: "2024-08-30",
      status: "Missed",
      grade: "N/A",
    },
    {
      id: 4,
      name: "Project",
      type: "Project",
      deadline: "2024-08-30",
      status: "Pending",
      grade: "N/A",
    },
    {
      id: 5,
      name: "Final Exam",
      type: "Exam",
      deadline: "2024-09-15",
      status: "Not Started",
      grade: "N/A",
    },
  ]);

  const isDeadlineValid = (deadline: string) => {
    return new Date(deadline) >= new Date();
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "opacity-70 text-gray-600";
      case "Missed":
        return "text-red-500 font-semibold";
      case "Pending":
        return "text-yellow-500 font-semibold";
      case "Not Started":
        return "text-gray-500";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 pt-3 mt-8">
      <h1 className="text-xl font-medium mb-6">Assessments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              <th className="p-4">Name</th>
              <th className="p-4">Type</th>
              <th className="p-4">Deadline</th>
              <th className="p-4">Status</th>
              <th className="p-4">Grade</th>
              <th className="p-4 text-center">Start</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((assessment) => (
              <tr
                key={assessment.id}
                className={`border-t border-gray-200 ${getStatusClass(
                  assessment.status
                )}`}
              >
                <td className="p-4">{assessment.name}</td>
                <td className="p-4">{assessment.type}</td>
                <td className="p-4">
                  {new Date(assessment.deadline).toLocaleDateString()}
                </td>
                <td className="p-4">{assessment.status}</td>
                <td className="p-4">{assessment.grade}</td>
                <td className="p-4 text-center">
                  <button
                    className={`px-4 py-2 rounded ${
                      isDeadlineValid(assessment.deadline)
                        ? "bg-lms-green text-white hover:bg-green-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!isDeadlineValid(assessment.deadline)}
                  >
                    Start
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
