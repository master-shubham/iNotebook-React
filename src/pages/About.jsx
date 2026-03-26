const About = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200">
        <div className="p-8 md:p-12">
          <h2 className="text-center mb-4 text-3xl font-bold text-blue-600">
            About iNotebook
          </h2>

          <p className="text-center text-gray-500 text-lg mb-4">
            Your secure and smart cloud-based notebook
          </p>

          <hr className="border-gray-300" />

          <p className="mt-4 text-gray-700">
            <strong>iNotebook</strong> is a modern web application designed to
            help users securely create, store, and manage their personal notes
            anytime, anywhere. It is built using the
            <strong> MERN stack</strong> to ensure high performance,
            scalability, and data security.
          </p>

          <h5 className="mt-6 font-bold text-lg">✨ Key Features</h5>
          <ul className="mb-4 divide-y divide-gray-200 border rounded-lg overflow-hidden">
            <li className="p-3">🔐 Secure user authentication using JWT</li>
            <li className="p-3">📝 Create, edit, and delete notes easily</li>
            <li className="p-3">☁️ Cloud-based access from anywhere</li>
            <li className="p-3">🚀 Fast and responsive UI with React</li>
            <li className="p-3">📦 Safe data storage using MongoDB</li>
          </ul>

          <h5 className="font-bold text-lg">🛠 Technology Stack</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mt-3">
            <div>
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-lg">
                React
              </span>
            </div>
            <div>
              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-lg">
                Node.js
              </span>
            </div>
            <div>
              <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-lg">
                Express
              </span>
            </div>
            <div>
              <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-lg">
                MongoDB
              </span>
            </div>
          </div>

          <h5 className="mt-6 font-bold text-lg">🎯 Purpose</h5>
          <p className="text-gray-700">
            iNotebook is developed as a learning-based full-stack project to
            understand real-world application development, including
            authentication, REST APIs, database integration, and frontend
            design.
          </p>

          <div className="text-center mt-6">
            <span className="text-gray-500">
              Made with ❤️ by <strong>Shubham</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
