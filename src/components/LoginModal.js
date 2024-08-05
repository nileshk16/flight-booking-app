import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-96">
        <h2 className="text-xl mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Login</button>
        </form>
        <button onClick={onClose} className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md">Close</button>
      </div>
    </div>
  );
}

export default LoginModal;
