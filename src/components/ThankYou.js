import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank You!</h2>
      <p className="text-gray-600 mb-4">Your booking has been confirmed. We look forward to seeing you on your flight.</p>
      <button
        onClick={handleBackToHome}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
