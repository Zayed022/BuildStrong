import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Team", link: "/teams" },
    { label: "Services", link: "/services" },
    { label: "Projects", link: "/projects" },
    { label: "Contact", link: "/contact" },
  ];

  const linkClasses = ({ isActive }) =>
    `text-md font-medium transition-colors duration-200 ${
      isActive
        ? "text-blue-700 dark:text-yellow-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink
  to="/"
  className="flex items-center gap-2 text-2xl font-bold text-blue-700 dark:text-yellow-400 tracking-wide"
>
  <img
    src="/SKlogo.png" // ⬅️ Place your logo file inside the public folder
    alt="S.K Reality Logo"
    className="w-8 h-8 object-contain" // Adjust size as needed
  />
  S.K Reality
</NavLink>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.link} to={item.link} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
          
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 pt-4 space-y-4 shadow-inner border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
          {navItems.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-700 dark:text-yellow-400"
                    : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
