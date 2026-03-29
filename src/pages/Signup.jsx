import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/home");
      toast.success("Account Created Successfully");
    } else {
      toast.error("Invalid credentials");
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
          Create Account
        </h2>

        <p className="text-gray-400 text-sm text-center mb-6">
          Join i<span className="text-purple-500">N</span>otebook today
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs text-gray-400 mb-1 uppercase">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChange}
              placeholder="Enter your name"
              className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs text-gray-400 mb-1 uppercase">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={onChange}
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
              onChange={onChange}
              placeholder="Enter password"
              className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs text-gray-400 mb-1 uppercase">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword" // ✅ FIXED
              onChange={onChange}
              placeholder="Confirm password"
              className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-br from-purple-600 to-purple-500 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
