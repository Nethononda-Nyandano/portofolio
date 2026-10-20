import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Statement from "./components/Statements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Certificates from "./components/Certificates";


const scrollTo = (id) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const App = () => {
  return (
    <div className="overflow-hidden bg- font-sans text-[#101010]">
      <Navbar scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Skills />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;