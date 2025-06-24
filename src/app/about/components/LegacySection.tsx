// components/LegacySection.tsx

"use client";

import { FC } from "react";
import CountUp from "react-countup";

const LegacySection: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl mb-4">
            A legacy of innovation and construction.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="text-5xl font-semibold text-red-800">
              <CountUp end={5} duration={2} />
            </div>
            <hr className="border-t border-gray-300 w-16" />
            <p className="text-gray-700 text-sm">Years in business</p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl font-semibold text-red-800">
              <CountUp end={60} duration={2} suffix="%" />
            </div>
            <hr className="border-t border-gray-300 w-16" />
            <p className="text-gray-700 text-sm">
              Faster than traditional construction
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl font-semibold text-red-800">
              <CountUp end={7} duration={2} suffix="+" />
            </div>
            <hr className="border-t border-gray-300 w-16" />
            <p className="text-gray-700 text-sm">
            Projects nation wide
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl font-semibold text-red-800">
              <CountUp end={5} duration={2} suffix="⋆" />
            </div>
            <hr className="border-t border-gray-300 w-16" />
            <p className="text-gray-700 text-sm">
              Rating from our clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
