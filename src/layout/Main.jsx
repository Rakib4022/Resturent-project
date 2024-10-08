import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/share/Footer";
import Navbar from "../pages/share/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('singup');
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;