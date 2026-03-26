import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      // redirect
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
    <div className="max-w-xl mx-auto mt-6 px-4">
      <h2 className="text-2xl font-semibold mb-4">
        Login to continue to iNotebook
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="exampleInputEmail1"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="exampleInputEmail1"
            value={credentials.email}
            name="email"
            onChange={onChange}
            autoComplete="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="text-sm text-gray-500 mt-1">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div>
          <label
            htmlFor="exampleInputPassword1"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
            autoComplete="current-password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
