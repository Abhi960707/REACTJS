import React from 'react'


const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <p className="text-white-400 mb-4">
          I'm Open to collaboration and meaningful opportunities where I can contribute, learn, and grow.
        </p>

        {/* My contact All Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2"> Email</h3>
            <a
              href="mailto:abhijeetnarsale14082004@gmail.com"
              className="text-blue-400 hover:underline"
            >
              abhijeetnarsale14082004@gmail.com
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2"> LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/abhijeet-narsale-a889832a3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Profile
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2"> GitHub</h3>
            <a
              href="https://github.com/Abhi960707"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Visit GitHub
            </a>
          </div>

        </div>

        {/* This is Resume Button */}
        <div className="mt-8">
          <a
            href="/Abhijeet Narsale Cv.pdf"
            download
            className="border border-amber-500 px-6 py-3 rounded-lg font-medium hover:bg-green-900  cursor-pointer "
          >
            Download Resume 📄
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;