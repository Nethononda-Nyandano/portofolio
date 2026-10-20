import React from "react";
import { container, heading } from "../data/constants";
import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <section className="bg-[#151515] py-16 text-white md:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr]">
          {/* Heading */}
          <div>
            

            <h2 className={heading}>
              The stack
              <br />
              behind the work.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-400 font-aenik-regular ">
              Technologies I use to design, build and ship web applications,
              mobile experiences and backend systems.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <div
                  key={group.category}
                  className="border-t border-neutral-800 pt-5"
                >
                  {/* Category */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700">
                      <GroupIcon size={17} />
                    </div>

                    <span className="text-sm font-medium text-neutral-200">
                      {group.category}
                    </span>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.name}
                          className="group flex items-center justify-between border-b border-neutral-800/70 py-3 transition-colors hover:border-neutral-600"
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={19}
                              className={`transition-colors ${item.color}  group-hover:text-white`}
                            />

                            <span className="text-sm text-neutral-300 transition-colors group-hover:text-white">
                              {item.name}
                            </span>
                          </div>

                          
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;