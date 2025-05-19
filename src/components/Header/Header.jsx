import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaGithub } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://assets.cdn.filesafe.space/tQPUc30JRr6uDkpnT9UJ/media/630df3964fde62f86a72d62d.jpeg"
              className="h-10 sm:h-12"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">
              Titan Fitness
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:order-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center p-2 ml-1 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation and Auth */}
          <div className="hidden lg:flex lg:items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 mr-2 hover:text-orange-600 transition-colors"
            >
              <FaUser className="inline mr-1" /> Log in
            </Link>
            <Link
              to="/signup"
              className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About" },
                { path: "/services", name: "Services" },
                { path: "/contact", name: "Contact" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-lg ${
                        isActive
                          ? "text-orange-600 bg-orange-50"
                          : "text-gray-700 hover:bg-gray-50"
                      } transition-colors`
                    }
                  >
                    {item.icon} {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation - Only shows when menu is open */}
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About" },
                { path: "/services", name: "Services" },
                { path: "/contact", name: "Contact" },
                { path: "/login", name: "Log In", className: "lg:hidden" },
                {
                  path: "/signup",
                  name: "Sign Up",
                  className: "lg:hidden bg-orange-600 text-white",
                },
                { path: "/login", name: "Log In", className: "lg:hidden" },
                {
                  path: "/signup",
                  name: "Sign Up",
                  className: "lg:hidden bg-orange-600 text-white",
                },
              ].map((item) => (
                <li key={item.path} className={item.className || ""}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-3 rounded-lg ${
                        isActive
                          ? "text-orange-600 bg-orange-50"
                          : "text-gray-700 hover:bg-gray-50"
                      } transition-colors`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
