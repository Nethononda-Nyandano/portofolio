
import React from "react";
import { container, heading, tagPill } from "../data/constants";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#f5f5f1] py-20 md:py-31.25">
      <div className={container}>
        <div className="mb-12 flex  flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className={heading}>Where I've been learning by doing.</h2>

          <p className="max-w-97.5 font-aenik-regular leading-relaxed text-neutral-500">
            My career is still being written. I'm intentionally collecting
            real product experience, shipping projects and learning how good
            engineering decisions are made.
          </p>
        </div>

        <div className="border-t border-[#deded8]">
          {experience.map((item, i) => (
            <article
              key={`${item.company}-${item.date}`}
              className="grid grid-cols-[52px_1fr] gap-4 border-b px-1 border-[#deded8] py-7 md:grid-cols-[70px_64px_1fr_230px] md:items-start md:gap-6"
            >
              {/* Number */}
              <div className="pt-2 text-[10px] font-aenik-bold text-neutral-500">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Company Logo */}
              <div className="hidden md:flex">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden  border border-[#deded8] bg-white">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Experience Content */}
              <div className="min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
                  <h3 className="font-aenik-bold text-xl font-medium tracking-[-0.03em] md:text-2xl">
                    {item.role}
                  </h3>

                  <span className="whitespace-nowrap text-[10px] font-aenik-regular text-neutral-500">
                    {item.date}
                  </span>
                </div>

                <div className="mt-1.5 mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h4 className="text-[13px] font-medium font-aenik-regular">
                    {item.company}
                  </h4>

                  {item.placement && (
                    <>
                      <span className="text-[11px] text-neutral-400">·</span>

                      <span className="text-[11px] text-neutral-500 font-aenik-regular">
                        {item.placement}
                      </span>
                    </>
                  )}
                </div>

                {item.location && (
                  <p className="mb-2 text-[11px] font-aenik-regular text-neutral-400">
                    {item.location}
                  </p>
                )}

                <p className="max-w-175  text-[13px] leading-relaxed text-neutral-600">
                  {item.detail}
                </p>
              </div>

              {/* Skills */}
              <div className="col-span-2 mt-4 flex flex-wrap justify-start gap-1.5 md:col-span-1 md:mt-0 md:justify-end">
                {item.chips.map((chip) => (
                  <span key={chip} className="border border-neutral-200 bg-white px-3 py-2 font-aenik-regular text-xs text-neutral-600"
                       >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

