import React, { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 mx-auto">
          {menu.map((item) => (
            <li key={item.name} className="relative group overflow-hidden">
              
              <NavLink
                to={item.path}
                className="relative z-10 px-4 py-2 text-black font-medium
                           transition-colors duration-300 group-hover:text-white"
              >
                {item.name}
              </NavLink>

              {/* Hover Background */}
              <span className="absolute left-0 top-0 h-0 w-full bg-purple-500
                               transition-all duration-300 group-hover:h-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-purple-700 h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-purple-800 transition"
        >
          <BsGrid className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md
        transition-all duration-300 overflow-hidden
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6">
          {menu.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className="block text-black font-medium"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
