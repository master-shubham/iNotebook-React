import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/theme/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white dark:bg-[#1a1a2e] text-black dark:text-white transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white">
            📓
          </div>
          <span className="text-xl font-bold">
            i<span className="text-purple-400">N</span>otebook
          </span>
        </NavLink>

        {/* Desktop Menu */}
        {token && (
          <ul className="hidden md:flex items-center gap-4">
            <li>
              <NavLink
                to="/home"
                onClick={closeMenu}
                className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-[#2d2d4e] hover:text-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-[#2d2d4e] hover:text-white"
              >
                About
              </NavLink>
            </li>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-200 dark:bg-[#2d2d4e]"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </ul>
        )}

        {/* Right Buttons */}
        <div className="hidden md:flex gap-2">
          {!token ? (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-lg text-sm border border-[#2d2d4e] text-gray-300 hover:bg-[#2d2d4e]"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="px-4 py-2 rounded-lg text-sm text-white bg-linear-to-r from-violet-600 to-purple-500"
              >
                Sign Up
              </NavLink>
              <button
                onClick={toggleTheme}
                className="px-4 py-2 rounded-lg hover:bg-[#2d2d4e] text-white text-left"
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg text-sm text-white bg-linear-to-r from-violet-600 to-purple-500"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3 bg-[#1a1a2e] rounded-xl p-4 border border-[#2d2d4e]">
            {token && (
              <>
                <NavLink
                  to="/home"
                  onClick={closeMenu}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:bg-[#2d2d4e]"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:bg-[#2d2d4e]"
                >
                  About
                </NavLink>

                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 rounded-lg hover:bg-[#2d2d4e] text-white text-left"
                >
                  {theme === "dark" ? "🌙" : "☀️"}
                </button>
              </>
            )}

            {!token ? (
              <>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:bg-[#2d2d4e]"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  onClick={closeMenu}
                  className="px-4 py-2 rounded-lg text-white bg-linear-to-r from-violet-600 to-purple-500"
                >
                  Sign Up
                </NavLink>
                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 rounded-lg hover:bg-[#2d2d4e] text-white text-left"
                >
                  {theme === "dark" ? "🌙" : "☀️"}
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-white bg-linear-to-r from-violet-600 to-purple-500"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
