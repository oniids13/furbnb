import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                className="h-12 w-auto"
                src="/images/personal_logo.png"
                alt="PacePal Logo"
              />
            </a>
          </div>

          {/* Desktop nav menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a
              href="#background"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
            >
              Background
            </a>
            <a
              href="#research"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
            >
              Research
            </a>
            <a
              href="#product-structure"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
            >
              Product Structure
            </a>
            <a
              href="#design-solutions"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
            >
              Design Solutions
            </a>
            <a
              href="#conclusion"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
            >
              Conclusion
            </a>
          </nav>

          {/* Mobile hamburger button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="#background"
                onClick={closeMenu}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                Background
              </a>
              <a
                href="#research"
                onClick={closeMenu}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                Research
              </a>
              <a
                href="#product-structure"
                onClick={closeMenu}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                Product Structure
              </a>
              <a
                href="#design-solutions"
                onClick={closeMenu}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                Design Solutions
              </a>
              <a
                href="#conclusion"
                onClick={closeMenu}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                Conclusion
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
