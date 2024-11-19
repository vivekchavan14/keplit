"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosFlash } from 'react-icons/io';

const Nav = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); // State for mobile menu toggle

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#service" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu visibility
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-gray-900 shadow-md z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <IoIosFlash className="text-4xl text-red-500" />
          <span className="text-2xl font-bold text-red-400 tracking-wider">
            Keplit
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`text-sm font-medium transition-all px-4 py-2 rounded-lg ${
                activeSection === item.link
                  ? "bg-red-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
              onClick={() => handleNavClick(item.link)}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Book a Call Button */}
        <Link
          href="https://cal.com/vivek-chavan-yzngnu" // Replace with your Cal.com scheduling link
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden md:block px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-sm font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all">
            Book a Call
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button className="text-gray-300 hover:text-white" onClick={toggleMobileMenu}>
            {/* Simple Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-black text-white py-4 px-6`}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`text-sm font-medium block px-4 py-2 mb-2 rounded-lg ${
              activeSection === item.link
                ? "bg-red-500 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
            onClick={() => handleNavClick(item.link)}
          >
            {item.name}
          </button>
        ))}
        <Link
          href="https://cal.com/vivek-chavan-yzngnu" // Replace with your Cal.com scheduling link
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-sm font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all">
            Book a Call
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
