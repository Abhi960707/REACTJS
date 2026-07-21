import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const About = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Vidya Online Services",
      location: "Pune",
      date: "April 2026 – Present",
      description: [
        "Developed DTE CHB Faculty Recruitment Management Portal using React.js, Python FastAPI, PostgreSQL, SQLAlchemy, Alembic, and JWT Authentication.",
        "Implemented role-based authentication for Admin, Regional Office, Institute, Candidate, Faculty, Treasury, and Directorate modules.",
        "Developed CRUD operations, REST APIs, file upload functionality, appointment scheduling, and secure authentication.",
        "Worked on backend API integration, debugging, performance optimization, and AI-assisted development tools."
      ]
    },
    {
      role: "MERN Stack Developer Intern",
      company: "SK Bit Software Solutions Pvt. Ltd.",
      location: "Pune",
      date: "December 2025 – March 2026",
      description: [
        "Developed MERN Stack applications using React.js, Node.js, Express.js, and MongoDB.",
        "Built REST APIs and performed API testing using Postman.",
        "Collaborated with developers for feature implementation and debugging."
      ]
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Dedicated Full Stack Developer with internship experience building scalable web applications using React.js, FastAPI, Node.js, Express.js, PostgreSQL, MongoDB, and REST APIs. Passionate about creating secure, responsive, and user-friendly applications while continuously learning modern technologies and AI-assisted development.
          </p>
        </motion.div>

        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3"
          >
            <Briefcase className="text-indigo-500" /> Experience
          </motion.h3>

          <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 ml-4 md:ml-10 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-900" />

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-colors shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-1 text-slate-500 dark:text-slate-400 text-sm font-medium">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;