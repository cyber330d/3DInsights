// data/courseOutlineData.ts
export const courseOutline = [
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
