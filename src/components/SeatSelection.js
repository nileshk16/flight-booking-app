import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Flights } from '../utils/Flights';

const SeatSelection = ({ selectedSeats, setSelectedSeats }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const selectedFlights = Flights.find((data) => data.id === parseInt(id));
    if (!selectedFlights) return <div>Flight not found.</div>;

    const { seatLayout, availableSeats } = selectedFlights;
    

    const allSeats = [...seatLayout.economy.first.flat(), ...seatLayout.economy.second.flat()];
    const availableSeatsSet = new Set(availableSeats);
    
    const handleSeatClick = (seat) => {
        const isSelected = selectedSeats.includes(seat);
        if (isSelected) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleConfirmClick = () => {
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat before confirming.');
        } else {
            navigate(`/Confirmation`, { state: { seats: selectedSeats } }); 
        }
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{selectedFlights.name}</h2>
            <h4 className="text-lg font-medium mt-2">Tickets</h4>
            <h5 className="text-md font-normal mt-1">{selectedFlights.flightType}</h5>
            <div className="flex mt-4">
                <div className="flex items-center mr-4">
                    <h6 className="mr-2">Available</h6>
                    <div className="w-4 h-4 bg-gray-300"></div>
                </div>
                <div className="flex items-center mr-4">
                    <h6 className="mr-2">Booked</h6>
                    <div className="w-4 h-4 bg-gray-500"></div>
                </div>
                <div className="flex items-center">
                    <h6 className="mr-2">Selected</h6>
                    <div className="w-4 h-4 bg-blue-600"></div>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-wrap">
                    {allSeats.map(seat => {
                        const seatNumber = `${seat}`;
                        const isAvailable = availableSeatsSet.has(seatNumber);
                        const isSelected = selectedSeats.includes(seatNumber);
                        const seatClass = isSelected ? 'bg-blue-600' : (isAvailable ? 'bg-gray-300' : 'bg-gray-500');
                        
                        return (
                            <div
                                key={seatNumber}
                                className={`w-8 h-8 m-1 flex items-center justify-center text-white cursor-pointer ${seatClass}`}
                                onClick={() => isAvailable && handleSeatClick(seatNumber)}
                            >
                                {seatNumber}
                            </div>
                        );
                    })}
                </div>
            </div>
            <button
                onClick={handleConfirmClick}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Confirm Selection
            </button>
        </div>
    );
};

export default SeatSelection;
