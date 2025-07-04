'use client';

import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[400px] md:h-[500px]">
      {/* Left Side */}
      <div
        className="flex-1 bg-cover bg-center flex items-center justify-center p-8 text-white text-4xl md:text-6xl font-bold"
        style={{
          backgroundImage: "url('/your-left-image.jpg')", // Replace with your image path
        }}
      >
        <h2 className="max-w-md leading-tight text-center md:text-left">
          READY TO GET <br /> STARTED?
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-neutral-900 bg-[url('/dot-pattern.png')] bg-cover flex items-center justify-center p-8">
        <div className="text-center space-y-6">
          <p className="text-white text-lg md:text-xl font-semibold">
            Let&apos;s talk about your project.
          </p>
          <Link href={`/contact#contact-form`} className="bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded transition duration-300">
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
};
