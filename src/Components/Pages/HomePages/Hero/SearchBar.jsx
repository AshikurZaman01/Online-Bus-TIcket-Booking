import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"
import { TbArrowsExchange } from "react-icons/tb"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

const SearchBar = () => {

    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        const dateInput = document.querySelector(".react-datepicker__input-container");
        dateInput && dateInput.classList.add("fade-in");
    }, []);


    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}

                className="w-full bg-neutral-50/20  border-2 border-neutral-300 shadow-lg rounded-xl p-3 top-40 absolute z-50">

                <div className="w-full flex items-center justify-between gap-5">

                    {/* Input section */}
                    <div className="w-[60%] flex items-center gap-5 relative">

                        <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex  items-center gap-x-1 rounded-lg">

                            <input type="text" name="" id="" placeholder="From...."
                                className="flex-1 h-full border-none bg-transparent focus:outline-none" />
                            <div className="w-5 h-5 ">
                                <FaMapMarkerAlt className="text-neutral-500" />
                            </div>

                        </div>

                        <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex  items-center gap-x-1 rounded-lg">

                            <input type="text" name="" id="" placeholder="To...."
                                className="flex-1 h-full border-none bg-transparent focus:outline-none" />
                            <div className="w-5 h-5 ">
                                <FaMapMarkerAlt className="text-neutral-500" />
                            </div>

                        </div>

                        <div className="absolute w-11 h-6 top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 bg-[#f50a01]  rounded-lg flex items-center justify-center">
                            <TbArrowsExchange className="w-6 h-6 text-white"></TbArrowsExchange>
                        </div>

                    </div>
                    {/* Input section */}

                    {/* date  */}
                    <div className="flex-1 flex items-center gap-5">
                        {/* Date Picker */}
                        <div className="flex-1 h-14 border border-neutral-300 bg-white rounded-md">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="yyyy/MM/dd"
                                className="flex-1 h-full border-none bg-transparent focus:outline-none cursor-pointer p-2"
                                placeholderText="Select a date"
                            />
                        </div>

                        {/* Search Button */}
                        <button
                            className="w-fit px-5 h-14 bg-[#f50a01] hover:bg-transparent border-2 border-[#f50a01] rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-[#f50a01] ease-in-out duration-300"
                        >
                            <FaSearch className="text-neutral-500" />
                            Search
                        </button>
                    </div>

                    {/* date  */}

                </div>


            </motion.div>
        </div>
    )
}

export default SearchBar