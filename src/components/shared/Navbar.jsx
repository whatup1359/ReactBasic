import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="font-sans w-full   "> 
      <div className="bg-gradient-to-r from-gray-900/95 to-gray-800/95 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img
                className="w-12 transition-all duration-300 animate-pulse"
                src="/logoReact.webp"
                alt="logoReact"
              />
              <span className="text-white ml-2 text-xl font-bold animate-pulse">React App</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:items-center space-x-4">
              <Link
                to="/"
                className="text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-lg"
              >
                About
              </Link>
              <Link
                to="/product"
                className="text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-lg"
              >
                Product
              </Link>
              <Link
                to="/cart"
                className="text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-lg"
              >
                Cart
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden sm:flex sm:items-center space-x-4"> 
              <button className="text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-600">
                Sign in
              </button>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-lg">
                Sign up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden"> 
              <button className="text-white hover:text-purple-500 transition-colors duration-300">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="block sm:hidden bg-gray-800 rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white hover:text-purple-500 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-500 transition-colors duration-300">
                About
              </Link>
              <Link to="/product" className="text-white hover:text-purple-500 transition-colors duration-300">
                Product
              </Link>
              <Link to="/cart" className="text-white hover:text-purple-500 transition-colors duration-300">
                Cart
              </Link>
              <div className="pt-3 border-t border-gray-700"> 
                <button className="w-full text-white py-2 mb-2 rounded-lg transition-all duration-300 hover:bg-purple-600">
                  Sign in
                </button>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg transition-all duration-300 hover:bg-purple-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;