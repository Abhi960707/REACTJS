import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <p className="text-white-400 mb-6">
        Feel free to reach out for collaboration or job opportunities.
      </p>

      <a
        href="mailto:abhijeetnarsale14082004@gmail.com"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Send Email
      </a>
    </section>
  );
};

export default Contact;