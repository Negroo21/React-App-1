import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700 p-5 fixed top-0 w-full z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-white text-2xl font-bold uppercase">
            Start Framework
          </NavLink>

          {/* Navbar Links*/}
          <div className="hidden lg:flex flex-grow justify-end space-x-6 mx-20">
            <NavLink
              to="/about"
              className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/portfolio"
              className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="text-white lg:hidden px-3 py-2 border rounded-md"
            aria-label="Toggle navigation"
          >
            <span className="text-xl">☰</span>
          </button>

          {/* Mobile Navbar Links */}
          <div
            className={`lg:hidden ${isMenuOpen ? "flex flex-col" : "hidden"}`}
          >
            <ul className="flex flex-col space-y-6">
              <li>
                <NavLink
                  to="/about"
                  className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
