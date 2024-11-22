import { FaBus, FaStar, FaWifi } from "react-icons/fa";
import { GiCharging, GiWaterBottle } from "react-icons/gi";
import { IoTv } from "react-icons/io5";
import { MdOutlineChair } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { Link } from "react-router-dom";

const TicketCard = ({ busName, routeFrom, routeTo, arrivalTime, price, availableSeats, timeDuration, departureTime, id }) => {
    return (
        <div className="w-full rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-all border border-gray-200">
            <div className="space-y-6">
                {/* Route Information */}
                <div>
                    {/* Bus Information */}
                    <div className="w-full flex items-center justify-between mb-5">
                        <div className="flex items-center gap-x-2 ">
                            <FaBus className="h-5 w-5" />
                            <p className="text-lg text-neutral-700 font-semibold">{busName}</p>
                        </div>
                        <div className="flex items-center gap-x-2 ">
                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                                <TbAirConditioning className="h-4 w-4" />
                                <p className="text-lg text-neutral-700 font-semibold">AC</p>
                            </div>
                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                                <FaStar className="h-4 w-4" />
                                <p className="text-lg text-yellow-400 font-semibold">4.5</p>
                            </div>
                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                                <MdOutlineChair className="h-4 w-4 -rotate-90" />
                                <p className="text-lg text-yellow-400 font-semibold">{availableSeats} Seats</p>
                            </div>
                        </div>
                    </div>
                    {/* Route and Time Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500 space-y-0.5">
                        <h1 className="text-2xl text-neutral-600 font-semibold">{arrivalTime}</h1>
                        <h1 className="text-2xl text-neutral-600 font-semibold">{departureTime}</h1>
                    </div>
                    <div className="flex items-center justify-between gap-x-4">
                        <h1 className="text-lg text-gray-700 font-semibold">{routeFrom}</h1>
                        <div className="flex-1 relative border-dashed border-gray-300">
                            <p className="absolute w-max px-4 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 border border-dashed border-gray-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                {timeDuration}
                            </p>
                        </div>
                        <h1 className="text-lg text-gray-700 font-semibold">{routeTo}</h1>
                    </div>
                </div>
                {/* Facilities */}
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <FaWifi className="text-indigo-500" />
                        <p className="text-sm text-gray-600">Internet</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <GiWaterBottle className="text-indigo-500" />
                        <p className="text-sm text-gray-600">Snacks</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoTv className="text-indigo-500" />
                        <p className="text-sm text-gray-600">TV</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <GiCharging className="text-indigo-500" />
                        <p className="text-sm text-gray-600">Charging</p>
                    </div>
                </div>
            </div>
            {/* Price and Button */}
            <div className="mt-6 flex items-center justify-between">
                <h1 className="text-lg font-bold text-gray-800">{price}</h1>
                <Link to={`/details/${id}`}>
                    <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                        Reserve Seat
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TicketCard;
