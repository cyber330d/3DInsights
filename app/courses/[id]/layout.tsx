// CourseLayout.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CollapsibleModule from "./CollapsibleModule";

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Sample courseOutline object (can be passed as a prop)
  const courseOutline = [
    {
      title: "Module 1: Introduction",
      id: "module-1",
      completed: true,
      submodules: [
        {
          title: "Submodule 1.1: Basics",
          id: "submodule-1-1",
          completed: true,
          submodules: [
            {
              title: "Lesson 1: Welcome",
              id: "lesson-1",
              completed: true,
            },
            {
              title: "Lesson 2: Getting Started",
              id: "lesson-2",
              completed: false,
            },
          ],
        },
        {
          title: "Submodule 1.2: Intermediate",
          id: "submodule-1-2",
          completed: false,
          submodules: [
            {
              title: "Lesson 1: Deep Dive",
              id: "lesson-3",
              completed: false,
              submodules: [
                {
                  title: "Case Study 1",
                  id: "case-1",
                  completed: false,
                },
                {
                  title: "Case Study 2",
                  id: "case-2",
                  completed: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Module 2: Advanced Topics",
      id: "module-2",
      completed: false,
      submodules: [
        {
          title: "Lesson 1: Complex Concepts",
          id: "lesson-4",
          completed: false,
        },
      ],
    },
    {
      title: "Module 3: Final Thoughts",
      id: "module-3",
      completed: false,
    },
  ];

  const tabs = [
    { name: "About", href: `/courses/[id]/about` },
    { name: "Course Outline", href: `/courses/[id]/outline` },
    { name: "Resources", href: `/courses/[id]/resources` },
    { name: "Assessments", href: `/courses/[id]/assessment` },
    { name: "Discussion", href: `/courses/[id]/discussion` },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
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
        <div className="mb-6 fixed z-50 w-full px-12 py-6 -ml-8  top-16 bg-green-200">
          <ul className="flex space-x-6">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className={`pb-2 ${
                  pathname.includes(tab.href)
                    ? "bg-green-100 text-white"
                    : "text-gray-700 border-b-4 border-transparent hover:border-b-lms-green hover:text-lms-green p-4 py-2 text-center flex items-center justify-center pb-3"
                }`}
              >
                <Link href={tab.href.replace("[id]", pathname.split("/")[2])}>
                  {tab.name}
                </Link>
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

