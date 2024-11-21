
const AmenitiesFilter = () => {
    return (
        <div>
            <div className="w-full border border-neutral-300 rounded-xl  p-4 space-y-3">
                <h1 className="text-lg text-neutral-700 font-semibold mb-5">
                    Bus Amenities
                </h1>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="internet" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="internet" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Internet <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="acandAirSuspensions" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="acandAirSuspensions" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Ac and Air Suspension <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="waterBottles" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="waterBottles" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Water Bottles <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="ledTvAndMusic" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="ledTvAndMusic" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            LED TV and Musics <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="chargingPort" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="chargingPort" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Charging Port <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="fan" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="fan" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Fan <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="superAc" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="superAc" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Super Ac <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AmenitiesFilter