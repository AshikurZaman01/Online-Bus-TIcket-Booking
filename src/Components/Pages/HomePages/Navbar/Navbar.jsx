import Links from "./Links"

const Navbar = () => {

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Services", path: "/services" },
        { id: 3, name: "Tickets", path: "/tickets" },
    ]

    return (
        <div className="flex justify-between items-center gap-4">

            <div>
                <h1 className="text-3xl font-bold capitalize text-red-500">Tickets.com</h1>
            </div>

            <div className="flex  justify-between items-center gap-20">

                <div>
                    <ul className="flex justify-between items-center gap-5 ">
                        {
                            routes.map((route) => <Links key={route.id} route={route}></Links>)
                        }
                    </ul>
                </div>

                <div>
                    <button className="btn btn-md bg-red-500 text-white ">Sign In</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar