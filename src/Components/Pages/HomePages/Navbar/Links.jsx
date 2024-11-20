import { NavLink } from "react-router-dom";

const Links = ({ route }) => {
    return (
        <div>
            <NavLink
                to={route.path}
                className={({ isActive }) =>
                    isActive ? "text-gray-500 font-bold" : "text-gray-400"
                }
            >
                {route.name}
            </NavLink>
        </div>
    );
}

export default Links;
