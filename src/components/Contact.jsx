import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { container, heading } from "../data/constants";
import { FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="pb-16 md:pb-24">
      <div
        className={`${container} grid grid-cols-1 gap-12 bg-white p-8 sm:p-12 md:grid-cols-2 md:gap-20 md:p-20`}
      >
        <div>
          <h2 className={heading}>Let's build something useful.</h2>
        </div>
        <div className="self-end">
          <p className="max-w-112.5 text-[17px] font-aenik-regular leading-relaxed text-neutral-600">
            I'm open to junior software engineering opportunities,
            internships, collaborations and interesting product problems.
          </p>
          <div className="mt-8 flex flex-col">
            <a
              href="mailto:hello@nethonix.co.za"
              className="flex items-center gap-2.5 border-b border-[#deded8] font-aenik-regular  py-3.5 text-[13px]"
            >
              <Mail size={17} /> nyandanonethononda8@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nyandano-nethononda-a425a9294"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 border-b border-[#deded8] font-aenik-regular  py-3.5 text-[13px]"
            >
            <FaLinkedin size={17}/> LinkedIn <ArrowUpRight size={15} className="ml-auto" />
            </a>
            <a
              href="https://github.com/Nethononda-Nyandano"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 border-b border-[#deded8] py-3.5 font-aenik-regular text-[13px]"
            >
              <FaGithub size={16} /> GitHub <ArrowUpRight size={15} className="ml-auto" />
            </a>

            <a
              
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 border-b border-[#deded8] py-3.5 font-aenik-regular text-[13px]"
            >
              <FaPhone size={16} /> 072 954 9330 <ArrowUpRight size={15} className="ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;