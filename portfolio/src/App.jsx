import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [dark, setDark] = useState(() => {
    // Check localStorage or system preference on initial load
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 relative font-sans">
      <button
        onClick={() => setDark(!dark)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform duration-200 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
        aria-label="Toggle Dark Mode"
      >
        {dark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
        <p>© {new Date().getFullYear()} Abhijeet Narsale. All rights reserved.</p>
        <p className="text-sm mt-2 flex items-center justify-center gap-1">Built with <span className="text-red-500">❤️</span> using React & Tailwind</p>
      </footer>
    </div>
  );
};

export default App;