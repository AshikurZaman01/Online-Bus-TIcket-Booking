import React from 'react'

const BusCompanies = () => {
    return (
        <div>
            <div className="w-full border border-neutral-300 rounded-xl  p-4 space-y-3">
                <h1 className="text-lg text-neutral-700 font-semibold mb-5">
                    Bus Companies
                </h1>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="akTravels" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="akTravels" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            AK Travels <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="greenBangla" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="greenBangla" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Green Bangla <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="deshTravels" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="deshTravels" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Desh Travels <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5 ">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="" id="roadMaster" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer " />
                        <label htmlFor="roadMaster" className="text-sm text-neutral-600  font-normal cursor-pointer ">
                            Road Master <span className="text-xs text-neutral-600">(10)</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BusCompanies