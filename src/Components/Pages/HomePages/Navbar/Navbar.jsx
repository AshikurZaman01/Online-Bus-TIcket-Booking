import { useState, useEffect } from "react";
import Links from "./Links";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "Tickets", path: "/tickets" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-4 px-5 py-3">
        <div>
          <Link to={"/"} className="text-3xl font-bold capitalize text-red-500 font-hero">
            Tickets.com
          </Link>
        </div>

        <div className="flex justify-between items-center gap-20">
          <div>
            <ul className="flex justify-between items-center gap-5">
              {routes.map((route) => (
                <Links key={route.id} route={route}></Links>
              ))}
            </ul>
          </div>

          <div>
            <button className="btn bg-red-500 text-white w-[100px] rounded-full hover:bg-red-600 transition-all">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
