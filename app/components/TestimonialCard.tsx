import { UserRound } from "lucide-react";

import React from "react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  text,
  rating,
}: TestimonialCardProps) {
  // Generate star rating display
  const stars = Array(5)
    .fill("★")
    .map((star, index) => (index < rating ? star : "☆"))
    .join(" ");

  return (
    <div className="rounded-lg shadow w-60 h-60 bg-white flex flex-col gap-4 hover:brightness-95 p-8">
      <div className="flex items-center h-16">
        <UserRound className="size-16 p-1 text-gray-500 rounded-full border-gray-500 border" />
        <p className="name text-base ml-4 overflow-clip">{name}</p>
      </div>

      <p className="text-xs overflow-clip h-20">{text}</p>
      <div className="rating text-lms-green">{stars}</div>
    </div>
  );
}
