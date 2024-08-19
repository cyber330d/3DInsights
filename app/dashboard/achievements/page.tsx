
export default function Achievements() {
    return (
      <div>
      <h1 className="text-2xl font-bold mb-4">Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Badges */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Badges</h2>
          <div className="flex gap-4">
            <div className="p-4 bg-white rounded-lg shadow text-center">
              <img
                src="/path/to/badge1.png"
                alt="Badge 1"
                className="w-16 h-16 mx-auto"
              />
              <p className="mt-2">Badge Name 1</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow text-center">
              <img
                src="/path/to/badge2.png"
                alt="Badge 2"
                className="w-16 h-16 mx-auto"
              />
              <p className="mt-2">Badge Name 2</p>
            </div>
            {/* Add more badges as needed */}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Certificates</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">Certificate Title 1</h3>
              <p className="text-gray-600">Issued by: Organization Name</p>
            </li>
            <li className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">Certificate Title 2</h3>
              <p className="text-gray-600">Issued by: Organization Name</p>
            </li>
            {/* Add more certificates as needed */}
          </ul>
        </div>
          </div>
      </div>
          
  );
}
