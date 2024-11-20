import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full bg-gradient-to-br from-neutral-900 to-black py-16 text-neutral-200 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6 relative z-10">
                {/* Left Section */}
                <div className="col-span-1 lg:col-span-2 space-y-8">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-4xl sm:text-5xl text-red-500 font-bold capitalize tracking-wide font-hero"
                    >
                        Tickets<span className="text-yellow-400">.com</span>
                    </Link>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        Your one-stop platform for reserving tickets to concerts, movies, and events. Join us to make your experience seamless and unforgettable.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-6 sm:gap-8">
                        {[
                            { Icon: FaInstagram, colors: "from-pink-500 to-yellow-500" },
                            { Icon: FaFacebook, colors: "from-blue-500 to-blue-800" },
                            { Icon: FaYoutube, colors: "from-red-500 to-orange-600" },
                            { Icon: FaTwitter, colors: "from-blue-400 to-blue-600" },
                        ].map(({ Icon, colors }, index) => (
                            <div
                                key={index}
                                className={`group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr ${colors} flex items-center justify-center hover:scale-110 transition transform duration-300 shadow-md cursor-pointer`}
                            >
                                <Icon className="text-xl sm:text-2xl text-neutral-200 group-hover:animate-pulse" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Links Sections */}
                {[
                    {
                        title: "Quick Links",
                        links: ["About", "My Account", "Reserve Your Ticket", "Create Your Account"],
                    },
                    {
                        title: "Top Reserved Routes",
                        links: [
                            "Khulna to Dhaka",
                            "Chittagong to Sylhet",
                            "Barishal to Rajshahi",
                            "Rajshahi to Dhaka",
                        ],
                    },
                    {
                        title: "Support Links",
                        links: ["Contact Us", "Help Center", "Report an Issue", "FAQ"],
                    },
                ].map(({ title, links }, index) => (
                    <div
                        key={index}
                        className="space-y-5 bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg"
                    >
                        <h1 className="text-xl sm:text-2xl font-bold border-b-2 border-gray-700 pb-2">{title}</h1>
                        <div className="space-y-4 flex flex-col">
                            {links.map((link, idx) => (
                                <Link
                                    to="/"
                                    key={idx}
                                    className="text-sm sm:text-base text-gray-400 hover:text-blue-500 transition-all duration-300 flex items-center space-x-2"
                                >
                                    <span>→</span>
                                    <span>{link}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Separator */}
            <div className="w-full bg-neutral-800/50 h-px my-8"></div>

            {/* Bottom Section */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 text-sm sm:text-base text-neutral-500">
                <p>&copy; {new Date().getFullYear()} Tickets.com. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link to="/terms" className="hover:text-neutral-300">
                        Terms of Service
                    </Link>
                    <Link to="/privacy" className="hover:text-neutral-300">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
