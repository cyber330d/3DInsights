import Image from "next/image";
import { Book, GraduationCap, UsersRound } from "lucide-react";

export default function WhyChooseUS() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-12 py-10 shadow bg-green-100 w-full">
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 text-xl leading-10">
        <h2 className="text-center">Why Learn With Our Courses?</h2>
        <p className="text-sm text-center font-normal leading-normal px-8 text-neutral-700">
          Our courses offer a comprehensive learning experience that combines
          interactive content, expert instructors, and practical exercises to
          ensure you gain the skills you need for success.
        </p>
      </div>
      <div className="course-container flex sm:flex-row items-center justify-center gap-4 md:gap-12 flex-wrap">
        <div className="flex flex-col items-center self-stretch justify-center w-52 lg:w-64">
          <Book className="size-20 stroke-1 text-lms-green" />
          <h4 className="leading-9 font-bold text-base text-center">
            01. Comprehensive Learning
          </h4>
          <p className="leading-7 text-xs text-neutral-700 text-center">
            Our courses cover a wide range of topics with in-depth materials and
            practical examples to help you master new skills.
          </p>
        </div>
        <div className="flex flex-col items-center self-stretch justify-center w-52 lg:w-64">
          <GraduationCap className="size-20 stroke-1 text-lms-green" />
          <h4 className="leading-9 font-bold text-base text-center">
            02. Achieve Certification
          </h4>
          <p className="leading-7 text-xs text-neutral-700 text-center">
            Receive a certificate upon completion of each course to showcase
            your achievements and enhance your resume.
          </p>
        </div>
        <div className="flex flex-col items-center self-stretch justify-center w-52 lg:w-64">
          <UsersRound className="size-20 stroke-1 text-lms-green" />
          <h4 className="leading-9 font-bold text-base text-center">
            03. Join a Learning Community
          </h4>
          <p className="leading-7 text-xs text-neutral-700 text-center">
            Engage with fellow learners and instructors through interactive
            forums and group activities to enhance your learning experience.
          </p>
        </div>
      </div>
    </div>
  );
}
