import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const featuredProjects = [
    {
      title: "DTE-CHB Faculty Recruitment Management Portal",
      description: "Government Faculty Recruitment Portal developed for Directorate of Technical Education with secure role-based modules including Admin, Regional Office, Institute, Candidate, Faculty, Treasury, and Directorate.",
      technologies: ["React.js", "Python FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT"],
      demoLink: "#",
      githubLink: "https://github.com/Abhi960707/Dte-Chb",
    },
     {
      title: "Sport Academy Management System",
      description: "MERN-based Sport Academy Management System for managing players, coaches, games, reports, and academy administration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      demoLink: "https://frontend-rho-pink-86.vercel.app",
      githubLink: "https://github.com/Abhi960707/sport-acedamy",
    },
    {
      title: "Task Management System",
      description: "Responsive MERN task management application with authentication, CRUD operations, task management, and modern dashboard UI.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      demoLink: "https://todolist-eight-xi-28.vercel.app",
      githubLink: "https://github.com/Abhi960707/todolist",
    },
    {
      title: "Job Portal System",
      description: "Full-stack MERN Job Portal enabling recruiters to manage companies, post jobs, and review applications, while candidates can search, apply, and track applications securely.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT", "Tailwind CSS"],
      demoLink: "https://job-portal-silk-beta.vercel.app",
      githubLink: "https://github.com/Abhi960707/job_portal",
    }
  ];

  const academicProjects = [
    {
      title: "Pharmacy Management System",
      description: "Java + MySQL application for medicine inventory and pharmacy management.",
      technologies: ["Java", "MySQL"],
    },
    {
      title: "Online Campus Recruitment System",
      description: "ASP.NET application for student registration, company management, and campus placement activities.",
      technologies: ["ASP.NET", "C#", "SQL Server"],
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400">Showcasing my latest full-stack web applications.</p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl text-indigo-600 dark:text-indigo-400">
                    <FolderGit2 size={28} />
                  </div>
                  <div className="flex gap-3">
                    {project.githubLink && project.githubLink !== "#" && (
                      <a href={project.githubLink} className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <FaGithub size={22} />
                      </a>
                    )}
                    {project.demoLink && project.demoLink !== "#" && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-xs font-semibold bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Academic Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {academicProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
            >
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    #{tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;