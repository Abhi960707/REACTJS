import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* Background Gradient Blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Available Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium border border-indigo-200 dark:border-indigo-800 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          🚀 Open to Full-Time Software Developer Opportunities
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white"
      >
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          Abhijeet Narsale
        </span>
      </motion.h1>

      {/* Subtitle / Role */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl"
      >
        Passionate Full Stack Developer specializing in building scalable, secure, and responsive web applications with React, Node.js, and FastAPI.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href="/Abhijeet Narsale Cv.pdf"
          download
          className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-full overflow-hidden transition-transform hover:scale-105 shadow-lg shadow-indigo-500/30"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10 flex items-center gap-2">
            Download Resume <Download size={18} />
          </span>
        </a>

        <a
          href="https://github.com/Abhi960707"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 shadow-sm"
        >
          View GitHub <FaGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/abhijeet-narsale-a889832a3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-slate-900 text-[#0A66C2] dark:text-[#3b82f6] font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-[#0A66C2]/20 dark:hover:border-[#3b82f6]/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 shadow-sm"
        >
          LinkedIn <FaLinkedin size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;