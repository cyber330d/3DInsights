"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="h-screen w-64 shadow-2xl text-gray-700 flex flex-col fixed left-0 overflow-y-auto">
      <div className="text-xl p-4 pt-6 px-6 font-semibold">
       
        <Link href="/dashboard">Dashboard</Link>
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-3">
          {/* <li
            className={`p-4 px-6 rounded ${
              pathname === "/dashboard"
                ? "bg-lms-green text-white"
                : "hover:bg-lms-green hover:opacity-80 hover:text-white"
            }`}
          >
            <Link href="/dashboard">Dashboard</Link>
          </li> */}
          <li
            className={`p-4 px-6 rounded ${
              pathname === "/dashboard/profile"
                ? "bg-lms-green text-white"
                : "hover:bg-lms-green hover:opacity-80 hover:text-white"
            }`}
          >
            <Link href="/dashboard/profile">Profile</Link>
          </li>
          <li
            className={`p-4 px-6 rounded ${
              pathname === "/dashboard/settings"
                ? "bg-lms-green text-white"
                : "hover:bg-lms-green hover:opacity-80 hover:text-white"
            }`}
          >
            <Link href="/dashboard/settings">Settings</Link>
          </li>
          <li
            className={`p-4 px-6 rounded ${
              pathname === "/dashboard/courses"
                ? "bg-lms-green text-white"
                : "hover:bg-lms-green hover:opacity-80 hover:text-white"
            }`}
          >
            <Link href="/dashboard/courses">Courses</Link>
          </li>
          <li
            className={`p-4 px-6 rounded ${
              pathname === "/dashboard/achievements"
                ? "bg-lms-green text-white"
                : "hover:bg-lms-green hover:opacity-80 hover:text-white"
            }`}
          >
            <Link href="/dashboard/achievements">Achievements</Link>
          </li>
          <li
            className={`p-4 px-6 rounded ${
              pathname === "/dashboard/courses/new-course"
                ? "bg-lms-green text-white"
                : "hover:bg-lms-green hover:opacity-80 hover:text-white"
            }`}
          >
            <Link href="/dashboard/courses/new-course">Create Course</Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        /* Custom scrollbar styles */
        .h-screen::-webkit-scrollbar {
          width: 4px; /* Adjust the width */
        }

        .h-screen::-webkit-scrollbar-thumb {
          background-color: #28a745; /* lms-green */
          border-radius: 8px;
        }

        .h-screen::-webkit-scrollbar-thumb:hover {
          background-color: #218838; /* Darker shade of lms-green */
        }

        .h-screen::-webkit-scrollbar-track {
          background: #f1f1f1; /* Optional: track background color */
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
