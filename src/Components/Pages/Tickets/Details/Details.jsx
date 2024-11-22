import TopLayout from "../../TopLayout/TopLayout"
import SeatLayout from "./SeatLayout/SeatLayout"
import BusDetails from "./BusDetails/BusDetails"

const Details = () => {



    return (
        <div className="w-full space-y-12 pb-16">

            {/* topLayer */}
            <TopLayout
                title={"Bus Details"}
                bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
            />
            {/* topLayer */}

            <div className="space-y-12 w-full pb-16">

                {/* seat layout */}
                <SeatLayout />
                {/* seat layout */}

                {/* bus details */}
                <BusDetails />
                {/* bus details */}

            </div>


        </div>
    )
}

export default Details