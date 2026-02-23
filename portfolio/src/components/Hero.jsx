import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center text-center px-6 pt-24">
      
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I'm{" "}
        <span className="text-amber-400">Abhijeet Narsale</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
        MERN Stack Developer specializing in building scalable,
        high-performance, and responsive full-stack web applications.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/Abhijeet Narsale Cv.pdf"
          download
          className="bg-violet-400 px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300 shadow-lg"
        >
          Download Resume
        </a>

         <a
          href="https://www.linkedin.com/in/abhijeet-narsale-a889832a3"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition duration-300 shadow-lg"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Abhi960707"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-green-400 px-6 py-3 rounded-lg font-medium hover:bg-sky-700 hover:text-black transition duration-300"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;