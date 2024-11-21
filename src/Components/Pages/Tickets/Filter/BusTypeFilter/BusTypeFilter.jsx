
const BusTypeFilter = () => {
    return (
        <div className="w-full border border-neutral-300 rounded-xl  p-4 space-y-3">
            <h1 className="text-lg text-neutral-700 font-semibold mb-5">
                Bus Types
            </h1>

            <div className="space-y-2.5 ">
                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" name="" id="acDelux" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                    <label htmlFor="acDelux" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                        AC Delux <span className="text-xs text-neutral-600">(10)</span>
                    </label>
                </div>
            </div>

            <div className="space-y-2.5 ">
                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" name="" id="turistAcDelux" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                    <label htmlFor="turistAcDelux" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                        Tourist AC Delux <span className="text-xs text-neutral-600">(10)</span>
                    </label>
                </div>
            </div>

            <div className="space-y-2.5 ">
                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" name="" id="airSuspension" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                    <label htmlFor="airSuspension" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                        Air Suspension <span className="text-xs text-neutral-600">(10)</span>
                    </label>
                </div>
            </div>

            <div className="space-y-2.5 ">
                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" name="" id="luxuryAcDelux" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                    <label htmlFor="luxuryAcDelux" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                        Luxury AC Delux <span className="text-xs text-neutral-600">(10)</span>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default BusTypeFilter