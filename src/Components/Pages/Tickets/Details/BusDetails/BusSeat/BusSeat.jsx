import { useEffect, useState } from "react";
import SeatLayout from "./SeatLayout";
import data from "../../../../../../assets/data.json";

const BusSeat = () => {
    const [seats, setSeats] = useState([]); // Renamed for clarity
    const [selectedSeats, setSelectedSeats] = useState([]); // Tracks selected seats
    const [showError, setShowError] = useState(false);

    const handleSeatClick = (seatId) => {
        const seat = seats.find((seat) => seat.id === seatId);

        // If seat is already booked, ignore click
        if (seat.status === "booked") {
            setShowError(true);
            setTimeout(() => setShowError(false), 2000);
            return;
        }

        // Handle selection logic
        setSelectedSeats((prevSelected) => {
            if (prevSelected.includes(seatId)) {
                // Remove seat if already selected
                return prevSelected.filter((id) => id !== seatId);
            } else {
                // Add seat if not selected, up to a maximum of 10 seats
                if (prevSelected.length >= 10) {
                    setShowError(true);
                    setTimeout(() => setShowError(false), 2000);
                    return prevSelected;
                }
                return [...prevSelected, seatId];
            }
        });
    };

    useEffect(() => {
        setSeats(data); // Load seat data from JSON
    }, []);

    return (
        <div className="w-full grid grid-cols-5 gap-10">
            {/* Seat layout */}
            <SeatLayout
                seats={seats}
                selectedSeats={selectedSeats}
                onSeatClick={handleSeatClick}
            />
            {/* Seat selection */}
            <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm">
                <h2 className="text-lg font-bold">Selected Seats:</h2>
                {selectedSeats.length > 0 ? (
                    <ul>
                        {selectedSeats.map((seat) => (
                            <li key={seat}>{seat}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No seats selected.</p>
                )}
                {showError && (
                    <p className="text-red-500">You cannot select more than 10 seats or booked seats.</p>
                )}
            </div>
        </div>
    );
};

export default BusSeat;
