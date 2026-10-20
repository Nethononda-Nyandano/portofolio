import React from "react";
import { ArrowUpRight } from "lucide-react";
import { container, heading } from "../data/constants";

const stats = [
  { value: "3+", label: "Years  Experience" },
  { value: "Full-Stack", label: "Development" },
  { value: "Always", label: "Learning" },
];

const About = () => {
  return (
    <section id="about" className="bg-amber-50/40 py-20 md:py-32">
      <div
        className={`${container} grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24`}
      >
        {/* Left column */}
        <div>
          <h2 className={heading}>
            Curious mind.
            <br />
            <span className="text-neutral-400">Builder at heart.</span>
          </h2>

          <p className="mt-6 max-w-sm font-aenik-regular text-base leading-relaxed text-neutral-600">
            I turn ideas into digital experiences, solve problems through code,
            and learn something new with every project.
          </p>
        </div>

        {/* Right column */}
        <div className="md:pt-8">
          <p className="max-w-2xl font-aenik-regular text-[17px] leading-[1.9] text-neutral-700">
            I'm a South African software developer with over three years of
            professional experience & 5+ years of personal projects experience,
            building web applications, mobile solutions, and business systems. I
            enjoy taking ideas from concept to reality, creating products that
            are practical, intuitive, and built to solve real problems.
          </p>

          <p className="mt-5 max-w-2xl font-aenik-regular text-[17px] leading-[1.9] text-neutral-700">
            For me, development is about more than making things work. It's
            about understanding the problem, exploring better approaches, and
            creating experiences that make a difference.
          </p>

          <p className="mt-5 max-w-2xl font-aenik-regular text-[17px] leading-[1.9] text-neutral-700">
            I'm alway experimenting, building personal projects, and pushing
            myself beyond what I already know. Every challenge is an opportunity
            to grow, and every project is a chance to build something better.
          </p>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-3 divide-x divide-[#deded8] border-y border-[#deded8]">
            {stats.map((stat) => (
              <div key={stat.label} className="py-5 pr-2 first:pl-0 sm:px-5">
                <strong className="block font-aenik-bold text-xl font-medium sm:text-2xl">
                  {stat.value}
                </strong>

                <span className="mt-2 flex flex-col   font-aenik-regular text-[10px] uppercase tracking-[0.08em] text-neutral-500 sm:text-xs">
                  {stat.label}
                  {stat.label === "Years  Experience" && (
                    <span className="font-aenik-regular text-[7px] lowercase">5+ years personal project experience</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
