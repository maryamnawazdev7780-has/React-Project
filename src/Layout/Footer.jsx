import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  "About Us",
  "Our Mission",
  "Our Services",
  "Our Project",
  "Our Team",
  "Blog Post",
  "Contact Us",
];

const exploreLinks = [
  "What We Offer",
  "Our Story",
  "Latest Post",
  "Help Center",
  "Terms & Condition",
];

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 py-10" >
      {/* Dotted Background */}
      <img
        src="/assets/bgdotes.png"
        alt="footer left"
        className="absolute top-0 left-0 opacity-40 h-80 w-80"
      />
      <img
        src="/assets/bgdotes2.png"
        alt="footer right"
        className="absolute bottom-0 right-0 opacity-40 h-80 w-80"
      />

      <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

        {/* About Company */}
        <div>
          <h3 className="font-semibold text-lg mb-2">About Company</h3>
          <img src="/assets/d-1-1.svg" alt="line" className="mb-4 w-12" />
          <img src="/assets/lg1.png" alt="logo" className="h-12 mb-4" />

          <p className="text-gray-400 text-sm leading-relaxed">
            Vestibulum ac diam sit amet quam vehicula on the elementum sed amet
            dui molestie. Curabitur arcu erat, accumsan id imperdiet.
          </p>

          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-purple-600
                             flex items-center justify-center
                             transition-all duration-300 ease-in-out
                             hover:bg-white hover:text-purple-600
                             hover:translate-x-1"
                >
                  <Icon className="text-sm" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Link</h3>
          <img src="/assets/d-1-1.svg" alt="line" className="mb-4 w-12" />

          <ul className="space-y-2 text-gray-400 text-sm">
            {quickLinks.map((item, index) => (
              <li
                key={index}
                className="relative w-fit cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:text-white hover:translate-x-1
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[1px] after:w-0 after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Explore</h3>
          <img src="/assets/d-1-1.svg" alt="line" className="mb-4 w-12" />

          <ul className="space-y-2 text-gray-400 text-sm">
            {exploreLinks.map((item, index) => (
              <li
                key={index}
                className="relative w-fit cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:text-white hover:translate-x-1
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[1px] after:w-0  after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-full"
              >
                 {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <img src="/assets/d-1-1.svg" alt="line" className="mb-4 w-12" />

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex gap-3 items-center transition-all duration-300 hover:translate-x-1">
              <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center">
                <FaPhoneAlt />
              </div>
              <p>+1 009-1812-347</p>
            </div>

            <div className="flex gap-3 items-center transition-all duration-300 hover:translate-x-1">
              <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center">
                <FaEnvelope />
              </div>
              <p>info@eventino.com</p>
            </div>

           <div className="flex gap-3 items-start transition-all duration-300 hover:translate-x-1">
  <div
    className="w-9 h-9 min-w-[36px] min-h-[36px]
               bg-purple-600 rounded-full
               flex items-center justify-center
               mt-1 flex-shrink-0"
  >
    <FaMapMarkerAlt />
  </div>
  <p>12/7 New Town, 245x Town 1214 Street, United State</p>
</div>

          </div>
        </div>
      </div>
      {/* Copyright Section */}
<div className="border-t border-gray-800 py-6 mt-10">
  <d iv className="max-w-7xl mx-auto px-6
                  flex flex-col md:flex-row
                  items-center justify-between
                  gap-4 text-sm text-gray-400 ms-32">

    <p>
      © {new Date().getFullYear()} Eventino. All Rights Reserved.
    </p>

    <div className="flex items-center gap-3">
      <span className="cursor-pointer hover:text-purple-500 transition ">
        Terms & Condition
      </span>
      <span className="text-gray-600">|</span>
      <span className="cursor-pointer hover:text-purple-500 transition me-40">
        Privacy Policy
      </span>
    </div>

  </d>
</div>

    </footer>
  );
};

export default Footer;
