import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContex);
    const handleLogout = () => {
        logOut();
    }
    const navOptins = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="Menu">OUR NENU</Link></li>
        <li><Link to="/order/salad">OREDR</Link></li>
        <li><Link to="secret">Secreet</Link></li>
        {user ? <button onClick={handleLogout}>LogOut</button> : <li><Link to="login">LOG IN</Link></li>}

    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl opacity-60 text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptins}
                        </ul>
                    </div>
                    <a className="text-xl ml-2 font-bold">Bistro Boss <br />Resturent</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptins}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn">
                        <FaCartPlus />
                        <div className="badge badge-secondary">+0</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;