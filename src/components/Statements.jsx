import React from "react";
import { container } from "../data/constants";

const Statement = () => {
  return (
    <section className="py-16 md:py-24">
      <div className={`${container} bg-[#e8e8e3] px-6 py-16 text-center sm:px-8 md:py-22.5`}>
        <div className="text-[13px] text-neutral-500 font-aenik-regular ">A note from the developer</div>
        <h2 className="my-6 text-[32px] font-aenik-bold italic  leading-[1.02] tracking-[-0.055em] sm:text-[clamp(35px,5vw,65px)]">
          " I'm not trying to know everything.
          <br />
          I'm trying to keep building. "
        </h2>
        <p className="mx-auto max-w-137.5 font-aenik-regular  text-sm leading-relaxed text-neutral-600">
          That means choosing the right tool, understanding why it works,
          learning when it doesn't, and shipping the next version.
        </p>
      </div>
    </section>
  );
};

export default Statement;