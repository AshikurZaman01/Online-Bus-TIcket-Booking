import { Link } from "react-router-dom"
import AlertMsg from "./AlertMsg/AlertMsg"

const SeatLayout = () => {

    const msg = (
        <>
            One individual can book 10 seats. If you want to book more than 10 seats, please contact with{" "}
            <Link to={'/supportTeam'} className='text-yellow-500 font-semibold'>
                our support team.
            </Link>
        </>
    );


    return (
        <div className="w-full space-y-8 ">

            {/* warning msg */}
            <AlertMsg msg={msg} />
            {/* warning msg */}

        </div>
    )
}

export default SeatLayout