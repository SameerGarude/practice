import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">MySite</div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Menu links for desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-blue-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              About
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Services
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>

        {/* Menu links for mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 px-2">
            <a href="#" className="block text-white hover:text-blue-400">
              Home
            </a>
            <a href="#" className="block text-white hover:text-blue-400">
              About
            </a>
            <a href="#" className="block text-white hover:text-blue-400">
              Services
            </a>
            <a href="#" className="block text-white hover:text-blue-400">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-6">
            This is a landing page built with React + Tailwind CSS.
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600">
            We are a passionate team building modern web experiences with React
            and Tailwind CSS. Our goal is to create fast, responsive, and
            visually stunning websites.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Fast", "Responsive", "Beautiful"].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">{item}</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700 text-white py-10 text-center">
        <h2 className="text-2xl font-bold">Ready to dive in?</h2>
        <p className="mt-2 mb-4">Start building your next project with us.</p>
        <button className="bg-white text-indigo-700 px-6 py-2 rounded font-semibold hover:bg-gray-100">
          Join Now
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2025 SameerGarude. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
