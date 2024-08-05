import React, { useState } from "react";
import { Flights, locations } from "../utils/Flights";
import FlightList from "./FlightList";

const FlightSearch = ({ searchState, setSearchState }) => {
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = Flights.filter(
      (flight) =>
        flight.source === searchState.from &&
        flight.destination === searchState.to 
        // &&
        // flight.availableDates.includes(searchState.date)
    );
    setFilteredFlights(results);
    setSearchPerformed(true);
  };

  return (
    <section className="m-5 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md ">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">From</label>
            <select
              value={searchState.from}
              onChange={(e) =>
                setSearchState((prevState) => ({
                  ...prevState,
                  from: e.target.value,
                }))
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Departure Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">To</label>
            <select
              value={searchState.to}
              onChange={(e) =>
                setSearchState((prevState) => ({
                  ...prevState,
                  to: e.target.value,
                }))
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Destination Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Departure Date</label>
            <input
              type="date"
              value={searchState.date}
              onChange={(e) =>
                setSearchState((prevState) => ({
                  ...prevState,
                  date: e.target.value,
                }))
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-5 block w-full flex justify-center py-2 px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search Flights
            </button>
          </div>
        </div>
      </form>
      {searchPerformed && filteredFlights.length > 0 && <FlightList flights={filteredFlights} />}
      {searchPerformed && filteredFlights.length === 0 && (
        <h2 className="mt-6 text-lg font-medium text-gray-900">No Flights</h2>
      )}
    </section>
  );
};

export default FlightSearch;
