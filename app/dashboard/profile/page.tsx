

export default function Page() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="/path/to/profile-image.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">Username: johndoe123</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Name:</label>
              <p className="p-2 bg-gray-100 rounded">John Doe</p>
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <p className="p-2 bg-gray-100 rounded">johndoe@example.com</p>
            </div>
            <div>
              <label className="block text-gray-700">
                Registration Number:
              </label>
              <p className="p-2 bg-gray-100 rounded">12345678</p>
            </div>
            <div>
              <label className="block text-gray-700">Academies:</label>
              <p className="p-2 bg-gray-100 rounded">Academy of Sciences</p>
            </div>
          </div>
          <div className="flex mt-6 gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit Profile
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Change Password
            </button>
          </div>
        </div>
      </div>
    );
}
