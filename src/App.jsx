function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">MySite</div>
          <div className="space-x-4">
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
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen">
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
    </div>
  );
}

export default App;
