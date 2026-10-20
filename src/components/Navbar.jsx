import React from "react";
import { ArrowUpRight, DownloadIcon, Menu, X } from "lucide-react";
import { container } from "../data/constants";

const links = ["About", "Work", "Experience","Education","Certificates","Contact"];

const Navbar = ({ scrollTo }) => {
  const [open, setOpen] = React.useState(false);

  const handleNav = (id) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-20 py-5 flex items-center justify-center w-full   bg-primary/20 backdrop-blur-md">
      <nav
        className={`w-full max-w-7xl  px-5 flex md:h-20 items-center justify-between `}
      >
        <button
          className="flex items-center gap-2.5 font-aenik-bold text-xl"
          onClick={() => handleNav("#home")}
          aria-label="Go home"
        >
          <div className="text-sm w-5 h-5 border md:w-10  md:h-10 md:text-lg items-center justify-center flex">
            N
          </div>
          <span className="text-sm md:text-xl">Nyandano Nethononda</span>
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-19 flex-col gap-6 border-b border-[#deded8] bg-[#f5f5f1] px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((item) => (
            <button
              key={item}
              className="text-left font-aenik-regular text-neutral-600 hover:text-black"
              onClick={() => handleNav(`#${item.toLowerCase()}`)}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="hidden md:flex bg-primary text-white items-center  p-2  px-4 gap-1 hover:-translate-y-1 hover:bg-neutral-800">
          Resume
          <DownloadIcon size={16} />
        </button>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
