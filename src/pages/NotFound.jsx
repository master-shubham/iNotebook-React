import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      {/* 404 Number */}
      <h1 className="text-9xl font-extrabold text-indigo-500 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="text-2xl md:text-3xl mt-4 font-semibold">
        Oops! Page Not Found
      </p>

      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg font-medium transition duration-300 shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
