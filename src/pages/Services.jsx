import React from "react";

const Services = () => {
  const services = [
    { title: "Secure Notes 🔐" },
    { title: "Create & Edit 📝" },
    { title: "Cloud Access ☁️" },
    { title: "Fast & Responsive 🚀" },
    { title: "Storage 📦" },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-white text-black dark:bg-[#1a1a2e] dark:text-white transition">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          What i<span className="text-purple-500">N</span>otebook Can Do
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          iNotebook is a cloud-based note-taking app designed for simplicity,
          security, and speed. Explore the key features below!
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a2e] border border-[#2d2d4e] rounded-2xl p-6 text-center hover:border-purple-500 transition"
          >
            <h2 className="text-white text-sm md:text-base font-medium">
              {service.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        Made with ❤️ by <strong>Shubham</strong>
      </div>
    </div>
  );
};

export default Services;
