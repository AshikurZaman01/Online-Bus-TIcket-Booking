import TopSearchCard from "./TopSearchCard";

const TopSearch = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center px-4 py-8 bg-gray-100">

            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                Top Search <span className="text-indigo-600">Routes</span>
            </h1>


            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TopSearchCard
                    routeFrom={"Khulna"}
                    routeTo={"Dhaka"}
                    timeDuration={"2h 30m"}
                    price={"৳500"}
                />

                <TopSearchCard
                    routeFrom={"Chittagong"}
                    routeTo={"Sylhet"}
                    timeDuration={"4h 45m"}
                    price={"৳800"}
                />

                <TopSearchCard
                    routeFrom={"Barishal"}
                    routeTo={"Rajshahi"}
                    timeDuration={"6h"}
                    price={"৳950"}
                />

                <TopSearchCard
                    routeFrom={"Rajshahi"}
                    routeTo={"Dhaka"}
                    timeDuration={"3h 30m"}
                    price={"৳600"}
                />

                <TopSearchCard routeFrom={"Sylhet"}
                    routeTo={"Khulna"}
                    timeDuration={"5h 30m"}
                    price={"৳1000"}
                />

                <TopSearchCard
                    routeFrom={"Dhaka"}
                    routeTo={"Barishal"}
                    timeDuration={"4h 30m"}
                    price={"৳700"}
                />

            </div>
        </div>
    );
};

export default TopSearch;
