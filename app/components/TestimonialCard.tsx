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
    <div className="rounded-lg shadow w-60 h-72 bg-white flex flex-col gap-4 hover:brightness-95 p-8">
      <div className="flex items-center">
        <UserRound className="w-16 h-16 text-gray-500" />
        <p className="name text-base ml-4">{name}</p>
      </div>

      <p className="text-xs">{text}</p>
      <div className="rating">{stars}</div>
    </div>
  );
}
