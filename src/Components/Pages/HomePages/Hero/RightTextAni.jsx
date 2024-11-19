import { motion } from 'framer-motion'

const RightTextAni = () => {

    const text = "Find Your Best Bus Tickets";

    const letters = text.split("");

    return (
        <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute inset-0 flex justify-center items-start top-16 px-6 sm:px-12"
        >
            <div className="text-center">
                <motion.h2 className="text-5xl mt-4 font-hero font-semibold">
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ color: 'rgb(255, 255, 255)' }}
                            animate={{
                                color: ['rgb(255, 255, 255)', 'rgb(255, 165, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 0, 255)'],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                delay: index * 0.1,
                                times: [0, 0.25, 0.5, 0.75, 1],
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h2>
            </div>
        </motion.div>
    )
}

export default RightTextAni