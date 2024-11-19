import hero from '../../../../assets/images/herobg.png';
import { motion } from 'framer-motion';
import LeftTextAni from './LeftTextAni';
import RightTextAni from './RightTextAni';

const Hero = () => {
    const variants = {
        hidden: { opacity: 0, y: -100 }, // Start with invisible and moved up
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" }, // Smooth transition
        },
    };

    return (
        <div>
            <motion.div
                className="w-full flex h-screen bg-cover bg-no-repeat relative  rounded-md"
                style={{ backgroundImage: `url(${hero})` }}
                variants={variants}
                initial="hidden"
                animate="visible"
            >

                <LeftTextAni />

                <RightTextAni />

            </motion.div>
        </div>
    );
};

export default Hero;
