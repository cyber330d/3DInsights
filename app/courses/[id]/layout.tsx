"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CollapsibleModule from "./CollapsibleModule";
import { courseOutline } from "@/app/data/courseOutlineData"; // Adjust the path based on your project structure

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const tabs = [
    { name: "About", href: `/courses/${pathname.split("/")[2]}/` },
    {
      name: "Course Outline",
      href: `/courses/${pathname.split("/")[2]}/outline`,
    },
    { name: "Resources", href: `/courses/${pathname.split("/")[2]}/resources` },
    {
      name: "Assessments",
      href: `/courses/${pathname.split("/")[2]}/assessment`,
    },
    {
      name: "Discussion",
      href: `/courses/${pathname.split("/")[2]}/discussion`,
    },
  ];

  return (
    <div className="flex">
      <aside className="w-64 p-4 shadow-xl h-screen max-h-screen overflow-y-auto sticky top-0 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-lms-green">
          Course Outline
        </h2>
        <ul className="space-y-2">
          {courseOutline.map((module) => (
            <CollapsibleModule key={module.id} module={module} />
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Tab navigation */}
        <div className="mb-6 fixed z-50 w-full px-12 py-3 -ml-8 top-16 bg-green-200">
          <ul className="flex space-x-6">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className={`pb-2 ${
                  pathname === tab.href
                    ? "border-b-4 border-b-lms-green text-lms-green"
                    : "text-gray-700 border-b-4 border-transparent hover:border-b-lms-green hover:text-lms-green p-4 py-2 text-center flex items-center justify-center"
                }`}
              >
                <Link href={tab.href}>{tab.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
