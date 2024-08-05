import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState({ email: "", phone: "" });
  const [passengerDetails, setPassengerDetails] = useState([{ name: "", age: "" }]);
  const [errors, setErrors] = useState({ email: "", phone: "", passengers: [] });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePassengerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPassengers = [...passengerDetails];
    updatedPassengers[index][name] = value;
    setPassengerDetails(updatedPassengers);
  };

  const handleAddPassenger = () => {
    setPassengerDetails([...passengerDetails, { name: "", age: "" }]);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", phone: "", passengers: [] };

    if (!contactInfo.email || !/\S+@\S+\.\S+/.test(contactInfo.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!contactInfo.phone || !/^\d{10}$/.test(contactInfo.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      valid = false;
    }

    const passengerErrors = passengerDetails.map((passenger, index) => {
      const errors = [];
      if (!passenger.name) errors.push("Name is required.");
      if (!passenger.age || isNaN(passenger.age) || passenger.age <= 0) errors.push("Age must be a positive number.");
      return errors.join(" ");
    });

    if (passengerErrors.some((error) => error)) {
      newErrors.passengers = passengerErrors;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Booking confirmed!");
       navigate(`/thank-you`)
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Booking Confirmation</h2>

      <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
          <div className="space-y-4 mt-4">
            <label className="block text-gray-700">
              <span className="block font-medium">Email:</span>
              <input
                type="email"
                name="email"
                value={contactInfo.email}
                onChange={handleContactChange}
                className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-green-500`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </label>
            <label className="block text-gray-700">
              <span className="block font-medium">Phone:</span>
              <input
                type="tel"
                name="phone"
                value={contactInfo.phone}
                onChange={handleContactChange}
                className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-green-500`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Passenger Details</h3>
          <div className="space-y-4 mt-4">
            {passengerDetails.map((passenger, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                <label className="block text-gray-700">
                  <span className="block font-medium">Passenger {index + 1} Name:</span>
                  <input
                    type="text"
                    name="name"
                    value={passenger.name}
                    onChange={(e) => handlePassengerChange(index, e)}
                    className={`border ${errors.passengers[index] ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-green-500`}
                    required
                  />
                </label>
                <label className="block text-gray-700 mt-4">
                  <span className="block font-medium">Passenger {index + 1} Age:</span>
                  <input
                    type="number"
                    name="age"
                    value={passenger.age}
                    onChange={(e) => handlePassengerChange(index, e)}
                    className={`border ${errors.passengers[index] ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-green-500`}
                    required
                  />
                </label>
                {errors.passengers[index] && <p className="text-red-500 text-sm mt-1">{errors.passengers[index]}</p>}
                {index === passengerDetails.length - 1 && (
                  <button
                    onClick={handleAddPassenger}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                  >
                    Add Another Passenger
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
