import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white text-neutral-800 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-lms-Green mb-6">
          About 3D Insights
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-700 mb-4">
            What is 3D Insights?
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            <span className="font-bold text-lms-Green">3D Insights</span> is a
            new type of learning software designed to help students, especially
            in subjects like science and engineering, understand complex ideas
            better. It does this by using 3D models—interactive images that
            students can explore from different angles—to make learning more
            engaging and easier to understand.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-700 mb-4">
            Why We Built It
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            Many students struggle with subjects that involve complicated ideas
            because traditional learning tools like textbooks and 2D images
            aren’t always enough.{" "}
            <span className="font-bold text-lms-Green">3D Insights</span> was
            created to solve this problem by bringing those ideas to life with
            3D models, making it easier for students to learn and remember what
            they study.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-700 mb-4">
            How It Works
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            <span className="font-bold text-lms-Green">3D Insights</span> is a
            Learning Management System (LMS) that includes interactive 3D models
            in its lessons. These models let students interact with complex
            subjects by zooming in, rotating, and exploring them in detail,
            helping them understand better than just reading or looking at flat
            images.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-700 mb-4">
            Who Made It
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            This software was developed by Erasmus Edward Obeth, a student at
            Ahmadu Bello University, Zaria, as part of his final year project.
            The goal was to create a tool that would make learning in science
            and engineering more effective and enjoyable.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-neutral-700 mb-4">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            Our mission with{" "}
            <span className="font-bold text-lms-Green">3D Insights</span> is to
            improve education by using technology to make complex subjects
            easier to understand. We believe that by making learning more
            interactive and engaging, students will be better prepared for their
            future careers.
          </p>
        </section>
        {/* contact us section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-700 mb-8 text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg text-neutral-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-neutral-300 rounded-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-neutral-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-neutral-300 rounded-lg"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg text-neutral-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 border border-neutral-300 rounded-lg"
                    placeholder="Your Message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-lms-green text-white rounded-lg font-semibold  hover:bg-green-400 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Address and Buttons */}
            <div className="space-y-8">
              {/* Address Details */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-700 mb-4">
                  Our Address
                </h3>
                <p className="text-lg text-neutral-600">
                  Ahmadu Bello University, Zaria
                  <br />
                  Department of Computer Science
                  <br />
                  Samaru Campus, Zaria
                  <br />
                  Kaduna State, Nigeria
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <Link
                  href="#get-started"
                  className="block bg-lms-green text-center w-full p-3 bg-lms-Green text-white rounded-lg font-semibold hover:bg-green-400 transition"
                >
                  Get Started
                </Link>
                <Link
                  href="#contribute"
                  className="block text-center w-full p-3 bg-lms-green text-white rounded-lg font-semibold hover:bg-green-400 transition"
                >
                  Contribute
                </Link>
                <Link
                  href="#sponsor"
                  className="block text-center w-full p-3 bg-lms-green text-white rounded-lg font-semibold hover:bg-green-400 transition"
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
