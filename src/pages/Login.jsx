import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      },
    );

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/home");
      toast.success("Logged in Successfully");
    } else {
      toast.error("Invalid Details");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-[#1a1a2e] border border-[#2d2d4e] rounded-2xl p-6 shadow-lg">
        {/* Heading */}
        <h2 className="text-white text-xl font-semibold text-center mb-2">
          Login to i<span className="text-purple-500">N</span>otebook
        </h2>

        <p className="text-gray-400 text-sm text-center mb-6">
          Access your notes securely
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs text-gray-400 mb-1 uppercase">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              autoComplete="username"
              placeholder="Enter your email"
              className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs text-gray-400 mb-1 uppercase">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-br from-purple-600 to-purple-500 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
