import { useState, useEffect, useRef } from "react";
import { Menu, X, UserCircle, Mail, Phone, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Abhijeet Narsale
        </a>

        {/* Desktop Nav & Profile */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Icons (Profile + Mobile Menu) */}
        <div className="flex items-center gap-4">
          
          {/* Profile Dropdown Container */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="HR Profile Details"
            >
              <UserCircle size={28} />
            </button>

            {/* Profile Details Dropdown */}
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50"
                >
                  <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-indigo-50/50 dark:bg-indigo-900/10">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Abhijeet Narsale</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Full Stack Developer</p>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    <a href="mailto:abhijeetnarsale14082004@gmail.com" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">
                      <Mail size={16} /> abhijeetnarsale14082004@gmail.com
                    </a>
                    
                    <a href="tel:+918468972682" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">
                      <Phone size={16} /> +91 8468972682
                    </a>
                    
                    <div className="flex gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <a href="https://www.linkedin.com/in/abhijeet-narsale-a889832a3" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                      <a href="https://github.com/Abhi960707" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50">
                    <a
                      href="/Abhijeet Narsale Cv.pdf"
                      download
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-colors"
                    >
                      <Download size={16} /> Download Resume
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 focus:outline-none p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-b border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;