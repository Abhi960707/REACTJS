import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-400">
            Sport Academy Management System
          </h3>
          <p className="mt-3 text-gray-400">
            MERN based application for managing players and events.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-400">
            Pharmacy Management System
          </h3>
          <p className="mt-3 text-gray-400">
            Java + MySQL system for medicine inventory management.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-400">
            Online Campus Recruitment
          </h3>
          <p className="mt-3 text-gray-400">
            ASP.NET based platform for job postings and student accounts.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;