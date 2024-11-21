import SearchBar from '../HomePages/Hero/SearchBar'
import TopLayout from '../TopLayout/TopLayout'
import { motion } from 'framer-motion'
import SearchResults from './SearchResults/SearchResults'
import Filter from './Filter/Filter'

const Tickets = () => {
    return (
        <div>

            {/* topLayer */}
            <TopLayout
                title={"Reserve Your Ticket"}
                bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
            />
            {/* topLayer */}

            <div className='space-y-12 relative'>

                {/* search */}
                <div className="space-y-5 w-full bg-neutral-50 py-4  top-0 z-30">
                    <motion.h1
                        initial={{ opacity: 0, y: -800 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.35, ease: "easeInOut" }}
                        className="text-3xl font-semibold text-neutral-700 capitalize text-center mt-10"
                    >
                        Want To Change The Route?
                    </motion.h1>

                    <SearchBar />
                </div>
                {/* search */}



                {/* search bus tickets */}
                <div className='w-full h-auto grid grid-cols-4 gap-16 relative flex'>

                    {/* filter */}
                    <div className='col-span-1 mt-24'>
                        <Filter className="space-y-4 sticky top-52 z-20" />
                    </div>
                    {/* filter */}



                    {/* search bus tickets */}
                    <SearchResults />
                </div>


            </div>


        </div>
    )
}

export default Tickets