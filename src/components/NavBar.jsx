import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  let location = useLocation();

  useEffect(() => {}, [location]);

  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink className="text-xl font-bold" to="/">
          <button> iNotebook</button>
        </NavLink>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {token && (
            <ul className="flex items-center gap-4">
              <li>
                <NavLink
                  className={`px-3 py-1 rounded-md ${
                    location.pathname === "/home"
                      ? "bg-gray-700"
                      : "hover:bg-gray-800"
                  }`}
                  to="/home"
                  viewTransition
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={`px-3 py-1 rounded-md ${
                    location.pathname === "/about"
                      ? "bg-gray-700"
                      : "hover:bg-gray-800"
                  }`}
                  to="/about"
                  viewTransition
                >
                  About
                </NavLink>
              </li>
            </ul>
          )}

          {!token ? (
            <div className="flex gap-2">
              <NavLink
                className="bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="bg-green-600 px-4 py-1 rounded-md hover:bg-green-700"
                to="/signup"
              >
                Signup
              </NavLink>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
