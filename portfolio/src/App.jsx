// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";

// function App() {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       <Navbar />
//       <Hero />
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <button
        onClick={() => setDark(!dark)}
        className="fixed bottom-5 right-5 bg-blue-600 px-4 py-2 rounded-lg"
      >
        Toggle Mode
      </button>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;