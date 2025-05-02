// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation.

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo or Brand Name */}
            <h1 className="text-2xl font-semibold text-indigo-500">
              Sameer Garude
            </h1>
          </div>
          <div className="flex space-x-4">
            <Link
              to="#about"
              className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-lg font-medium"
            >
              About Me
            </Link>
            <Link
              to="#resume"
              className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-lg font-medium"
            >
              Resume Portfolio
            </Link>
            <Link
              to="#blog"
              className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-lg font-medium"
            >
              Blog
            </Link>
            <Link
              to="#contact"
              className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </Link>
            <Link
              to="#extra"
              className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-lg font-medium"
            >
              Extra Get it Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
