import { GraduationCap, ArrowUpRight } from "lucide-react";
import { container } from "../data/constants";
import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-30">
      <div className={container}>
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-aenik-bold text-2xl opacity-10 md:text-[50px]">
              /EDUCATION
            </p>

            <h2 className="font-aenik-bold text-2xl leading-none tracking-tighter md:text-[60px]">
              Where I learned.
            </h2>

            <span className="font-aenik-regular tracking-wide opacity-40">
              Academic background & qualifications
            </span>
          </div>

          <p className="max-w-97.5 font-aenik-regular text-md leading-relaxed text-neutral-500">
            The foundation behind the way I approach software development,
            problem-solving, and building practical applications.
          </p>
        </div>

        {/* Education Entries */}
        <div className="space-y-4">
          {education.map((item, index) => (
            <article
              key={`${item.institution}-${item.qualification}`}
              className="relative overflow-hidden border border-neutral-200 bg-neutral-50 p-6 transition-colors duration-300 hover:bg-neutral-100 md:p-8 lg:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
                {/* Left */}
                <div className="flex flex-col justify-between gap-6">
                  <div className="flex items-center justify-between">
                    <span className="font-aenik-bold text-[10px] uppercase tracking-widest text-neutral-500">
                      Academic Background
                    </span>

                    <span className="font-aenik-bold text-xs text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 flex-none place-items-center ">
                     <img src={item.image} />
                    </div>

                    <div>
                      <p className="font-aenik-bold text-sm">
                        {item.period}
                      </p>

                      <p className="mt-1 font-aenik-regular text-xs text-neutral-500">
                        {item.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div>
                  <p className="mb-3 font-aenik-bold text-xs uppercase tracking-widest text-neutral-500">
                    {item.institution}
                  </p>

                  <h3 className="mb-3 font-aenik-bold text-3xl leading-tight tracking-tight md:text-4xl">
                    {item.qualification}
                  </h3>

                  <p className="mb-5 font-aenik-regular text-sm text-neutral-600">
                    {item.field}
                  </p>

                  <p className="max-w-2xl font-aenik-regular text-sm leading-7 text-neutral-500">
                    {item.description}
                  </p>

                  {/* Relevant Skills */}
                  {item.tags?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-neutral-200 bg-white px-3 py-2 font-aenik-regular text-xs text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;