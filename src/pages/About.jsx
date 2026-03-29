const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Card */}
      <div className="border border-[#2d2d4e] rounded-2xl shadow-lg bg-white text-black dark:bg-[#1a1a2e] dark:text-white transition">
        <div className="p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-3">
            About i<span className="text-purple-500">N</span>otebook
          </h2>

          <p className="text-center text-gray-400 text-sm md:text-base mb-6">
            Your secure and smart cloud-based notebook
          </p>

          <div className="border-t border-[#2d2d4e] mb-6"></div>

          {/* Description */}
          <p className=" text-sm md:text-base leading-relaxed">
            <strong>iNotebook</strong> is a modern web
            application designed to help users securely create, store, and
            manage their personal notes anytime, anywhere. It is built using the
            <strong> MERN stack</strong> to ensure high
            performance, scalability, and data security.
          </p>

          {/* Features */}
          <h5 className="mt-6 font-semibold">✨ Key Features</h5>

          <div className="mt-3 border border-[#2d2d4e] rounded-xl overflow-hidden">
            {[
              "🔐 Secure user authentication using JWT",
              "📝 Create, edit, and delete notes easily",
              "☁️ Cloud-based access from anywhere",
              "🚀 Fast and responsive UI with React",
              "📦 Safe data storage using MongoDB",
            ].map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 text-sm border-b border-[#2d2d4e] last:border-none"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <h5 className="mt-6 font-semibold">🛠 Technology Stack</h5>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <span className="bg-purple-600 text-white text-sm py-2 rounded-lg text-center">
              React
            </span>

            <span className="bg-green-600 text-white text-sm py-2 rounded-lg text-center">
              Node.js
            </span>

            <span className="bg-gray-700 text-white text-sm py-2 rounded-lg text-center">
              Express
            </span>

            <span className="bg-yellow-400 text-black text-sm py-2 rounded-lg text-center">
              MongoDB
            </span>
          </div>

          {/* Purpose */}
          <h5 className="mt-6 font-semibold">🎯 Purpose</h5>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">
            iNotebook is developed as a learning-based full-stack project to
            understand real-world application development, including
            authentication, REST APIs, database integration, and frontend
            design.
          </p>

          {/* Footer */}
          <div className="text-center mt-8">
            <span className="text-gray-500 text-sm">
              Made with ❤️ by <strong>Shubham</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
