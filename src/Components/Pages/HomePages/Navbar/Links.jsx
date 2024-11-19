import { NavLink } from "react-router-dom";

const Links = ({ route }) => {
    return (
        <div>
            <NavLink
                to={route.path}
                className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-500"
                }
            >
                {route.name}
            </NavLink>
        </div>
    );
}

export default Links;
