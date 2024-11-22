import { GiSteeringWheel } from "react-icons/gi";

const SeatLayout = ({ seats, selectedSeats, onSeatClick }) => {
    // Group seats into rows
    const rows = seats.reduce((acc, seat, index) => {
        const row = Math.floor(index / 4); // Adjust the number of seats per row
        acc[row] = acc[row] || [];
        acc[row].push(seat);
        return acc;
    }, []);

    return (
        <div className="col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
            <div className="w-full space-y-7">
                <p className="text-base text-neutral-600 font-medium text-center">
                    Click on available seats to reserve your seat.
                </p>

                {/* Seat layout */}
                <div className="w-full flex items-stretch gap-x-4">
                    <div className="w-10 h-fit">
                        <GiSteeringWheel className="text-3xl mt-7 text-primary1 -rotate-90" />
                    </div>

                    {/* Horizontal rows */}
                    <div className="flex flex-col items-start space-y-3 border-l-2 border-dashed border-neutral-300 pl-7">
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex items-center gap-3">
                                {row.map((seat) => (
                                    <button
                                        key={seat.id}
                                        onClick={() => onSeatClick(seat.id)}
                                        className={`w-12 h-12 rounded ${seat.status === "booked"
                                                ? "bg-primary1 text-white cursor-not-allowed"
                                                : selectedSeats.includes(seat.id)
                                                    ? "bg-primary text-white"
                                                    : "bg-gray-200"
                                            }`}
                                        disabled={seat.status === "booked"}
                                    >
                                        {seat.id}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatLayout;
