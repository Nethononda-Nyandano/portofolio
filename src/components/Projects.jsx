import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { container, tagPill } from "../data/constants";
import { projects } from "../data/projects";
import TechStack from "./TechStack";

const ProjectPreview = ({ project }) => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative flex h-75 items-center justify-center overflow-hidden bg-neutral-100 font-aenik-regular md:h-100 lg:h-115"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className={`absolute inset-0 ${project.image === "/helpdesk.png" || "/shoni.png" ? "p-5 " : "h-full w-full"}   object-cover transition-all duration-500 ${
          isHovering ? "scale-[1.02] opacity-0" : "scale-100 opacity-100"
        }`}
      />

      {/* Video */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full p-2 object-contain transition-all duration-500 ${
          isHovering ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
        }`}
      />

      {/* Hover indicator */}
      <div
        className={`absolute bottom-4 right-4 rounded-full bg-black/80 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white transition-all duration-300 ${
          isHovering ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        Preview
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-20 md:py-30 ">
      <div className={container}>
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="">
            <p className="text-2xl md:text-[50px] font-aenik-bold opacity-10 ">
              /SELECTED PROJECT
            </p>
            <h2 className="text-2xl opacity-100 font-aenik-bold leading-none tracking-tighter md:text-[60px]">
              Things I'm building.
            </h2>
            <span className="font-aenik-regular tracking-wide opacity-40">
              on going & finished projects
            </span>
          </div>

          <p className="max-w-97.5 text-md leading-relaxed font-aenik-regular text-neutral-500">
            Not just screenshots. These are projects where the architecture,
            constraints and decisions are part of the story.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`grid overflow-hidden relative ${project.accent} md:grid-cols-[0.8fr_1.2fr]`}
            >
              {/* LEFT — INFO */}
              <div className="flex min-h-90 flex-col justify-between p-6 md:min-h-115 md:p-8 lg:p-10">
                {/* Top */}
                <div className="flex items-center justify-between font-aenik-bold text-[9px] uppercase tracking-[0.08em] text-neutral-600">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>

                {/* Middle */}
                <div className="max-w-125 ">
                  <div className="mb-5 flex items-center gap-3 absolute -top-1 -left-1 text-2xl">
                    <span className="text-8xl font-aenik-bold opacity-10 uppercase tracking-[0.12em] text-neutral-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mb-4 font-aenik-bold text-[42px] font-medium leading-none md:text-[54px]">
                    {project.title}
                  </h3>

                  <p className="max-w-107.5 text-[13px] font-aenik-regular leading-[1.7] text-neutral-600">
                    {project.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex items-end justify-between gap-5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 font-aenik-regular">
                    <div className="min-w-0 flex-1">
                      <TechStack technologies={project.tags} />
                    </div>
                  </div>

                  {/* Project Link */}
                  <a
                    href={project.href}
                    aria-label={`View ${project.title}`}
                    className="grid h-11 w-11 flex-none place-items-center rounded-full bg-neutral-900 text-white transition-transform duration-300 hover:scale-110"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* RIGHT — PREVIEW */}
              <ProjectPreview project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
