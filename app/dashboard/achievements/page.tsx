"use client";
import Image from "next/image";
import { Shield, Scroll, Download } from "lucide-react";

export default function Achievements() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Achievements</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Badges */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition text-center w-[29%]">
              {/* <Image
                src="/path/to/badge1.png"
                alt="Badge 1"
                width={64} // Adjust size
                height={64} // Adjust size
                className="mx-auto"
              /> */}
              <Shield className="mx-auto w-4/6 h-1/2" />

              <p className="mt-2 text-lg font-medium">
                Cybersecurity Specialist
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition text-center w-[29%]">
              {/* <Image
                src="/path/to/badge2.png"
                alt="Badge 2"
                width={64} // Adjust size
                height={64} // Adjust size
                className="mx-auto"
              /> */}
              <Scroll className="mx-auto w-4/6 h-1/2" />

              <p className="mt-2 text-lg font-medium">Reader Mage</p>
            </div>
            {/* Add more badges as needed */}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 relative">
              <h3 className="text-xl font-semibold">Certificate Title 1</h3>
              <p className="text-gray-600 mt-2">Issued by: Organization Name</p>
              <Download className="absolute top-8 right-8 " />
            </li>
            <li className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 relative">
              <h3 className="text-xl font-semibold">Certificate Title 2</h3>
              <p className="text-gray-600 mt-2">Issued by: Organization Name</p>
              <Download className="absolute top-8 right-8 " />
            </li>
            {/* Add more certificates as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}
