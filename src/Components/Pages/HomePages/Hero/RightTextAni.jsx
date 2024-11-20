import { motion } from 'framer-motion';

const RightTextAni = () => {
    const text = "Find Your Best Bus Tickets";

    return (
        <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute inset-0 flex justify-center items-start top-16 px-6 sm:px-12"
        >
            <div className="text-center">
                <h2 className="text-5xl mt-4 font-hero font-semibold">
                    {text}
                </h2>
            </div>
        </motion.div>
    );
};

export default RightTextAni;
