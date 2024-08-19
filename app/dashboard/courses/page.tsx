import Link from "next/link";

export default function Page() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enrolled Courses */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold">Course Name 1</h3>
                <p className="text-gray-600">Progress: 70%</p>
                <div className="h-2 bg-gray-200 rounded mt-2">
                  <div className="w-7/10 h-full bg-blue-500 rounded"></div>
                </div>
              </li>
              <li className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold">Course Name 2</h3>
                <p className="text-gray-600">Progress: 50%</p>
                <div className="h-2 bg-gray-200 rounded mt-2">
                  <div className="w-1/2 h-full bg-blue-500 rounded"></div>
                </div>
              </li>
              {/* Add more courses as needed */}
            </ul>
          </div>

          {/* Manage Courses */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Manage Courses</h2>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Your Courses</h3>
              {}
              <Link href={`/dashboard/courses/new-course`}>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Create New Course
                </button>
              </Link>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold">Created Course Name 1</h3>
                <p className="text-gray-600">Enrolled Students: 25</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold">Created Course Name 2</h3>
                <p className="text-gray-600">Enrolled Students: 40</p>
              </li>
              {/* Add more courses as needed */}
            </ul>
          </div>
        </div>
      </div>
    );
}
