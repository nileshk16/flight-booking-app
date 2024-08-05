import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
        <a href="/" className="flex-shrink-0">
          <img src="/airline.svg" alt="Logo" className="h-8 w-auto"/>
        </a>
        <nav>
          <ul className="flex gap-6">
            <li className="flex items-center">
              <a href="/contact-us" className="hover:text-gray-400 transition duration-300">Contact Us</a>
            </li>
            <li className="flex items-center">
              <button 
                onClick={openModal} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Header;
