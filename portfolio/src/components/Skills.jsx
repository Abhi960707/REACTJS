import { motion } from "framer-motion";
import { Code2, Server, Database, Terminal, Wrench, Layout, FileCode2, Cpu, Globe, Braces, BrainCircuit, ShieldCheck, Cog } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-pink-500" size={24} />,
      skills: [
        { name: "React", icon: <Code2 size={18} /> },
        { name: "JavaScript", icon: <FileCode2 size={18} /> },
        { name: "HTML", icon: <Globe size={18} /> },
        { name: "CSS", icon: <Globe size={18} /> },
        { name: "Tailwind", icon: <Layout size={18} /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-emerald-500" size={24} />,
      skills: [
        { name: "Node.js", icon: <Server size={18} /> },
        { name: "Express", icon: <Server size={18} /> },
        { name: "FastAPI", icon: <Cpu size={18} /> },
      ],
    },
    {
      title: "Database",
      icon: <Database className="text-blue-500" size={24} />,
      skills: [
        { name: "MongoDB", icon: <Database size={18} /> },
        { name: "PostgreSQL", icon: <Database size={18} /> },
        { name: "MySQL", icon: <Database size={18} /> },
      ],
    },
    {
      title: "Programming",
      icon: <Terminal className="text-amber-500" size={24} />,
      skills: [
        { name: "Java", icon: <Terminal size={18} /> },
        { name: "C", icon: <Braces size={18} /> },
        { name: "C++", icon: <Braces size={18} /> },
        { name: "PHP", icon: <FileCode2 size={18} /> },
      ],
    },
    {
      title: "Tools & AI",
      icon: <Wrench className="text-purple-500" size={24} />,
      skills: [
        { name: "Git", icon: <Cog size={18} /> },
        { name: "GitHub", icon: <Cog size={18} /> },
        { name: "Postman", icon: <ShieldCheck size={18} /> },
        { name: "Cursor AI", icon: <BrainCircuit size={18} /> },
        { name: "Copilot", icon: <BrainCircuit size={18} /> },
        { name: "Gemini AI", icon: <BrainCircuit size={18} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-slate-600 dark:text-slate-400">A comprehensive overview of my technical expertise and tools.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-100 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span className="text-slate-400 dark:text-slate-500">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;