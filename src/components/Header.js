import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/aclan logo.png"
            alt="Logo"
            className="h-10"
          />
          <div>
            <h1 className="text-lg font-bold">ACLAN</h1>
            <p className="text-sm italic">Good Water for Better Health!!</p>
            <p className="text-xs">AN ISO 9001 - 2008 CERTIFIED COMPANY</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 relative">
          <Link to="/" className="hover:text-gray-300 transition-all">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition-all">About Us</Link>

          {/* Dropdown Menu for Products */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-gray-300 flex items-center focus:outline-none transition-all">
              Products
              <motion.svg
                className="ml-1 w-4 h-4"
                initial={{ rotate: 0 }}
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-1 w-48 bg-white text-black shadow-lg rounded-lg z-50"
                >
                  <li className="hover:bg-gray-100">
                    <Link to="/purifiers/water" className="block px-4 py-2">Water Purifiers</Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/purifiers/dispensers" className="block px-4 py-2">Water Dispensers</Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/purifiers/ro-uv" className="block px-4 py-2">Power RO / UV</Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/purifiers/softeners" className="block px-4 py-2">Water Softeners</Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/purifiers/ro-rejection" className="block px-4 py-2">RO Rejection</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link to="/clientele" className="hover:text-gray-300 transition-all">Clientele</Link>
          <Link to="/career" className="hover:text-gray-300 transition-all">Career</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-all">Contact</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-800"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <Link to="/" className="hover:text-gray-300 transition-all" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-gray-300 transition-all" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              
              {/* Mobile Dropdown */}
              <div className="w-full flex flex-col items-center">
                <button
                  className="hover:text-gray-300 flex items-center focus:outline-none transition-all"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Products
                  <motion.svg
                    className="ml-1 w-4 h-4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full bg-blue-700 text-center"
                    >
                      <li className="hover:bg-blue-600"><Link to="/purifiers/water" className="block px-4 py-2">Water Purifiers</Link></li>
                      <li className="hover:bg-blue-600"><Link to="/purifiers/dispensers" className="block px-4 py-2">Water Dispensers</Link></li>
                      <li className="hover:bg-blue-600"><Link to="/purifiers/ro-uv" className="block px-4 py-2">Power RO / UV</Link></li>
                      <li className="hover:bg-blue-600"><Link to="/purifiers/softeners" className="block px-4 py-2">Water Softeners</Link></li>
                      <li className="hover:bg-blue-600"><Link to="/purifiers/ro-rejection" className="block px-4 py-2">RO Rejection</Link></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/clientele" className="hover:text-gray-300 transition-all" onClick={() => setIsMobileMenuOpen(false)}>Clientele</Link>
              <Link to="/career" className="hover:text-gray-300 transition-all" onClick={() => setIsMobileMenuOpen(false)}>Career</Link>
              <Link to="/contact" className="hover:text-gray-300 transition-all" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
