import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white text-neutral-800 min-h-screen flex flex-col items-center p-8">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-extrabold text-lms-green mb-8 text-center">
          About 3D Insights
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold  text-lms-green mb-6">
            What is 3D Insights?
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            <span className="font-semibold text-lms-green">3D Insights</span> is
            a new type of learning software designed to help students,
            especially in subjects like science and engineering, understand
            complex ideas better. It does this by using 3D models—interactive
            images that students can explore from different angles—to make
            learning more engaging and easier to understand.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-lms-green mb-6">
            Why We Built It
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            Many students struggle with subjects that involve complicated ideas
            because traditional learning tools like textbooks and 2D images
            aren’t always enough.{" "}
            <span className="font-semibold text-lms-green">3D Insights</span>{" "}
            was created to solve this problem by bringing those ideas to life
            with 3D models, making it easier for students to learn and remember
            what they study.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-lms-green mb-6">
            How It Works
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            <span className="font-semibold text-lms-green">3D Insights</span> is
            a Learning Management System (LMS) that includes interactive 3D
            models in its lessons. These models let students interact with
            complex subjects by zooming in, rotating, and exploring them in
            detail, helping them understand better than just reading or looking
            at flat images.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-lms-green mb-6">
            Who Made It
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            This software was developed by Erasmus Edward Obeth, a student at
            Ahmadu Bello University, Zaria, as part of his final year project.
            The goal was to create a tool that would make learning in science
            and engineering more effective and enjoyable.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold  text-lms-green mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600 text-center">
            Our mission with{" "}
            <span className="font-semibold text-lms-green">3D Insights</span> is
            to improve education by using technology to make complex subjects
            easier to understand. We believe that by making learning more
            interactive and engaging, students will be better prepared for their
            future careers.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-medium text-lms-green mb-8 text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-center w-full">
            {/* Contact Form */}
            <div className="bg-green-200 p-8 self-end rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-neutral-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-4 border border-neutral-300 rounded-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-neutral-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-4 border border-neutral-300 rounded-lg"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-neutral-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-4 border border-neutral-300 rounded-lg"
                    placeholder="Your Message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-lms-green text-white rounded-lg font-semibold hover:bg-green-500 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Address and Buttons */}
            <div className="space-y-8">
              {/* Address Details */}
              <div className="">
                <h3 className="text-2xl font-semibold text-lms-green mb-4 w-full">
                  Our Address
                </h3>

                <p className="text-lg text-lms-green flex justify-center items-start">
                  {/* <div className="logo w-[30%]"> */}
                  {/* </div> */}
                  Ahmadu Bello University, Zaria
                  <br />
                  Department of Computer Engineering
                  <br />
                  Samaru Campus, Zaria
                  <br />
                  Kaduna State, Nigeria
                  <Image
                    src="/abu.png"
                    width="300"
                    height="600"
                    alt="ABU Logo"
                    className="w-1/3 h-full self-start -mt-7"
                  />
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link
                  href="/about#get-started"
                  className="block bg-lms-green text-center w-full p-4 text-white rounded-lg font-semibold hover:bg-green-500 transition"
                >
                  Get Started
                </Link>
                <Link
                  href="/about#contribute"
                  className="block bg-lms-green text-center w-full p-4 text-white rounded-lg font-semibold hover:bg-green-500 transition"
                >
                  Contribute
                </Link>
                <Link
                  href="/about#sponsor"
                  className="block bg-lms-green text-center w-full p-4 text-white rounded-lg font-semibold hover:bg-green-500 transition"
                >
                  Sponsor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
