import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlightList = ({ flights }) => {
  const navigate = useNavigate();



  const calculateAvailableSeats = (availableSeats) => availableSeats.length;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-gray-900">Available Flights</h2>
      <ul className="mt-2">
        {flights.map((flight) => (
          <li key={flight.id} className="border-b border-gray-200 py-4 flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-md font-semibold">{flight.airline}</h3>
              <p>{flight.source} to {flight.destination}</p>
              <p>{flight.departureTime} - {flight.arrivalTime}</p>
              <p>Price: {flight.price}</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <h5 className="text-sm font-medium">Available Seats: {calculateAvailableSeats(flight.availableSeats)}</h5>
              <button 
                onClick={() => navigate(`flight/${flight.id}`)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Book now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
