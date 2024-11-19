import { motion } from "framer-motion";

const LeftTextAni = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute inset-0 flex justify-center items-start top-8 px-6 sm:px-12"
        >
            <div className="text-center">
                <h2 className="text-2xl sm:text-2xl font-semibold">
                    <span className="text-blue-500">Get You </span>
                    <span className="text-blue-500">Bus </span>
                    <span className="text-blue-500">Tickets</span>
                </h2>
            </div>
        </motion.div>
    )
}

export default LeftTextAni
