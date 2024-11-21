import TicketCard from "./TicketCard/TicketCard";

const SearchResults = () => {
    // ডামি ডাটা
    const tickets = [
        {
            busName: "Shyamoli Paribahan",
            routeFrom: "Dhaka",
            routeTo: "Chittagong",
            arrivalTime: "08:00 AM",
            departureTime: "02:00 PM",
            price: "৳ 1200",
            availableSeats: 35,
            timeDuration: "6 Hours",
        },
        {
            busName: "Green Line",
            routeFrom: "Dhaka",
            routeTo: "Sylhet",
            arrivalTime: "09:00 AM",
            departureTime: "03:30 PM",
            price: "৳ 1400",
            availableSeats: 25,
            timeDuration: "6.5 Hours",
        },

        {
            busName: "Hanif Enterprise",
            routeFrom: "Dhaka",
            routeTo: "Khulna",
            arrivalTime: "10:00 AM",
            departureTime: "04:00 PM",
            price: "৳ 1500",
            availableSeats: 30,
            timeDuration: "6 Hours",
        },

        {
            busName: "Shohag Paribahan",
            routeFrom: "Dhaka",
            routeTo: "Rajshahi",
            arrivalTime: "11:00 AM",
            departureTime: "05:00 PM",
            price: "৳ 1600",
            availableSeats: 40,
            timeDuration: "6 Hours",
        },
        {
            busName: "Shohag Paribahan",
            routeFrom: "Dhaka",
            routeTo: "Rajshahi",
            arrivalTime: "11:00 AM",
            departureTime: "05:00 PM",
            price: "৳ 1600",
            availableSeats: 40,
            timeDuration: "10 Hours",
        },
        {
            busName: "Shohag Paribahan",
            routeFrom: "Dhaka",
            routeTo: "Rajshahi",
            arrivalTime: "11:00 AM",
            departureTime: "05:00 PM",
            price: "৳ 1600",
            availableSeats: 40,
            timeDuration: "5 Hours",
        },
        {
            busName: "Shohag Paribahan",
            routeFrom: "Dhaka",
            routeTo: "Rajshahi",
            arrivalTime: "11:00 AM",
            departureTime: "05:00 PM",
            price: "৳ 1600",
            availableSeats: 40,
            timeDuration: "16 Hours",
        }
    ];

    return (
        <div className="w-full col-span-3 space-y-10 mt-24 pt-11">
            {tickets.map((ticket, index) => (
                <div key={index} className="space-y-6">
                    <TicketCard {...ticket} />
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
