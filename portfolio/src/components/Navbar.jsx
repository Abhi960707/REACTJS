import React from 'react'


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">
          Abhijeet 
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;