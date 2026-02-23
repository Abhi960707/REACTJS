import React from 'react'

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "React.js", "Node.js", "Express.js","Java","ASP.NET",
    "MongoDB", "MySQL", "Git-GitHub", "Tailwind CSS",
    "Shadcn UI","Postman","RESTful APIs"
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg hover:scale-105 transition text-white">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;