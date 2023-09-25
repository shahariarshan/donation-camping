import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
        <nav className=" flex justify-between items-center py-8 ">
       <Logo></Logo>
            <ul className="flex gap-6">
                <li>
                <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }
            >
            Home
            </NavLink>
                </li>
                <li>
                <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }
            >
            Donation
            </NavLink>
         </li>
                <li>
                <NavLink
            to="/static"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }
            >
           Static
            </NavLink>
         </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;