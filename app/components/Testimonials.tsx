import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Chinedu Okafor",
    text: "The platform's interface is intuitive and user-friendly. I've completed multiple courses with ease.",
    rating: 5,
  },
  {
    name: "Aisha Bello",
    text: "I love the variety of courses available. The quality of content is top-notch.",
    rating: 4,
  },
  {
    name: "Emeka Nwankwo",
    text: "Great experience overall. The courses are well-structured and informative.",
    rating: 4,
  },
  {
    name: "Ngozi Umeh",
    text: "A valuable resource for anyone looking to upskill. Highly recommend to others.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-12 py-10 pb-6 shadow bg-green-100">
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-4 text-xl py-5 leading-10 bg-green-50 w-full">
        <h2 className="text-black">Testimonials</h2>
        <p className="text-sm text-center font-normal leading-normal text-neutral-700">
          What our students say about us
        </p>
      </div>
      <div className="course-container flex items-center justify-start sm:justify-center px-4 pb-8 sm:pl-0 gap-4 overflow-x-scroll sm:overflow-x-auto w-screen">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
}
