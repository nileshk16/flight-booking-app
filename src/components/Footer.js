import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="mb-4">
          <ul className="flex gap-6">
            <li>
              <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-gray-400 transition duration-300">About Us</a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-gray-400 transition duration-300">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="mb-4 flex gap-4">
          <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Arjuna airways. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
