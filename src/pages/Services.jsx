import React from "react";

const Services = () => {
  const services = [
    {
      title: "Secure Notes 🔐",
    },
    {
      title: "Create & Edit 📝",
    
    },
    {
      title: "Cloud Access ☁️",
    
    },
    {
      title: "Fast & Responsive 🚀",
    },
    {
      title: "Storage 📦",

    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          What iNotebook Can Do
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          iNotebook is a cloud-based note-taking app designed for simplicity,
          security, and speed. Explore the key features below!
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl shadow-lg border border-gray-200 ${service.color}`}
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-400 text-sm">
        Made with ❤️ by <strong>Shubham</strong>
      </div>
    </div>
  );
};

export default Services;
