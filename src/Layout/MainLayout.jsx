import { Outlet } from "react-router-dom";
import Navbar from "../Componant/Header/Navbar/Navbar";



const MainLayout = () => {
    return (
        <div className="container mx-auto">
         <Navbar ></Navbar>
         <div>
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default MainLayout;