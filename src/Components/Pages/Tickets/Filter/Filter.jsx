import AmenitiesFilter from "./AmenitiesFilter/AmenitiesFilter"
import BusCompanies from "./BusCompanies/BusCompanies"
import BusTypeFilter from "./BusTypeFilter/BusTypeFilter"
import PriceFilter from "./PriceFilter/PriceFilter"

const Filter = ({ className }) => {



    return (
        <div className={`w-full ${className}`}>

            <h1 className="text-xl text-neutral-700 font-semibold mb-5">
                Apply Filters
            </h1>

            {/*price filter */}
            <PriceFilter />
            {/*price filter */}

            {/*bus type filter */}
            <BusTypeFilter />
            {/*bus type filter */}

            {/*bus companies filter */}
            <BusCompanies />
            {/*bus companies filter */}

            {/*Amenities filter */}
            <div className="w-full border border-neutral-300 rounded-xl  p-4 space-y-3">
                <AmenitiesFilter />
            </div>
            {/*Amenities filter */}


        </div>
    )
}

export default Filter