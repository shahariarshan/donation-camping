import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Static from "../Pages/Static/Static";
import SingleCard from "../Pages/SingleCard/SingleCard";


const createARouter = createBrowserRouter([
   {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
             loader : () =>fetch('/donation.json')
        },
        {
            path:'/donation',
            element:<Donation></Donation>
            
        },
        {
            path:'/static',
            element:<Static></Static>,
            loader : () =>fetch('/donation.json')
        
        },
        {
            path:'/donate/:id',
            element:<SingleCard></SingleCard>,
            loader : () =>fetch('/donation.json')
        }
    ]

   },
 
])


export default createARouter;