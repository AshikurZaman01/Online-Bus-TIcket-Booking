import { useState } from "react"
import PriceRangeSlider from "../../PriceRangeSlider"

const PriceFilter = () => {

    const [rangeValue, setRangeValue] = useState({
        min: 0,
        max: 100,
    })

    const handleRangeChange = (values) => {
        setRangeValue({ values })
    }

    return (
        <div className="w-full border border-neutral-300 rounded-xl  p-4 space-y-1">
            <h1 className="text-lg text-neutral-600 font-medium ">
                Apply Filters
            </h1>

            <PriceRangeSlider min={100} max={3000} onChange={handleRangeChange} />
        </div>
    )
}

export default PriceFilter