import React from "react";
import { MapPin } from "lucide-react";
import { container } from "../data/constants";

const Footer = () => {
  return (
    <footer className="bg-[#151515] py-6 text-white">
      <div className={`${container} flex items-center justify-between text-[11px] text-neutral-400`}>
        <div className="flex items-center gap-2.5 text-white">
          <span className="grid h-8.5 w-8.5 font-aenik-regular  place-items-center rounded-full border border-white font-display text-[15px]">
            N
          </span>
          <span>Nyandano Nethononda</span>
        </div>
        <div className="hidden items-center gap-1.5 md:flex font-aenik-regular ">
          <MapPin size={14} /> South Africa, available for opportunities
        </div>
        <span className="font-aenik-regular ">© 2026</span>
      </div>
    </footer>
  );
};

export default Footer;