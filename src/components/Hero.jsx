import React from "react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { container } from "../data/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = ({ scrollTo }) => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-neutral-50 pt-28 pb-20 md:pt-40 md:pb-28"
    >
      <div
        className={`${container} grid grid-cols-1 items-center gap-14 md:grid-cols-[1fr_0.85fr] md:gap-16`}
      >
        {/* Introduction */}
        <div className="relative z-10">
          

          <h1 className="mb-8 font-aenik-bold leading-[0.8] tracking-[-0.07em] text-[clamp(70px,15vw,150px)] md:text-[clamp(100px,10vw,180px)]">
            <span className="inline-block transition-transform duration-500 hover:-translate-y-2">
              Hello
            </span>
            <span className="text-neutral-400">.</span>
          </h1>

          <p className="mb-5 max-w-xl font-aenik-regular text-lg leading-relaxed text-neutral-600 sm:text-xl">
            I'm{" "}
            <strong className="font-aenik-bold text-neutral-950">
              Nyandano Nethononda
            </strong>
            .
          </p>

          <p className="max-w-xl font-aenik-regular text-base leading-[1.9] text-neutral-600 sm:text-lg">
            I build digital products that turn ideas into practical solutions.
            From crafting intuitive interfaces to developing the systems behind
            them, I enjoy solving problems, exploring new possibilities, and
            bringing ideas to life through code.
          </p>

          <p className="mt-5 max-w-lg font-aenik-regular text-sm leading-relaxed text-neutral-500 sm:text-base">
            Always building. Always learning. Focused on creating things that
            make a difference.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo("#work")}
              className="group inline-flex items-center gap-3 border border-neutral-950 bg-neutral-950 px-6 py-3.5 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
            >
              Explore my work
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>

            <a
              href="mailto:nyandanonethononda8@gmail.com"
              className="group inline-flex items-center gap-3 border border-neutral-300 px-6 py-3.5 text-sm text-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950"
            >
              Let's talk
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

         
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-500 md:mx-0 md:ml-auto">
          <div className="group rotate-[1.5deg] bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:rotate-0 sm:p-5">
            <div className="relative aspect-4/5 overflow-hidden bg-neutral-200">
              <img
                src="/Black and White Poster (1).png"
                alt="Nyandano Nethononda — Full-Stack Developer"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
              />

              <img
                src="/Black and White Poster.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
              />
            </div>

            <div className="flex items-center justify-between gap-3 px-1 pt-4 text-[10px] text-neutral-500 sm:text-xs">
              <span className="font-aenik-bold text-neutral-900 flex flex-col">
                Nyandano Nethononda
                <span className="font-aenik-regular italic text-neutral-500">Full-Stack Developer</span>
              </span>

              <span>Johannesburg, South Africa</span>
            </div>
          </div>

          {/* Social links */}
          <div className="absolute -right-2 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-5 border border-neutral-200 bg-white/90 p-3 shadow-lg backdrop-blur-sm sm:-right-5 sm:p-4">
            <a
              href="https://github.com/Nethononda-Nyandano/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:text-black"
            >
              <FaGithub size={22} />
            </a>

            <span className="h-6 w-px bg-neutral-200" />

            <a
              href="https://www.linkedin.com/in/nyandano-nethononda-a425a9294"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
            >
              <FaLinkedin size={22} />
            </a>

            <span className="h-6 w-px bg-neutral-200" />

            <a
              href="mailto:nyandanonethononda8@gmail.com"
              aria-label="Send me an email"
              className="text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:text-black"
            >
              <Mail size={22} />
            </a>
          </div>

          {/* Decorative detail */}
          <div className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 border border-neutral-200 sm:-bottom-7 sm:-left-7 sm:h-36 sm:w-36" />
        </div>
      </div>
    </section>
  );
};

export default Hero;