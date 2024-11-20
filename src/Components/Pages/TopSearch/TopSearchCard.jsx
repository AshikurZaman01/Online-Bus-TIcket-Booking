import { FaWifi } from "react-icons/fa";
import { GiCharging, GiWaterBottle } from "react-icons/gi";
import { IoTv } from "react-icons/io5";

const TopSearchCard = ({ routeFrom, routeTo, timeDuration, price }) => {
    return (
        <div className="w-full rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-all border border-gray-200">

            <div className="space-y-6">

                {/* Route Information */}
                <div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <p>From</p>
                        <p>To</p>
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

                <button className="px-5 py-2 bg-primary1 hover:bg-primary2 text-neutral-200 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-neutral-100">
                    Reserve Seat
                </button>


            </div>

        </div>
    );
};

export default TopSearchCard;
