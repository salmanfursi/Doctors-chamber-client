import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signing from "../Pages/Signing/Signup";
import Appoinment from "../Pages/Home/Appoinment/Appoinment";
import Privateroute from "./PrivateRoute";
import AllAppoinment from "../Pages/Home/AllAppoinment/AllAppoinment";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Signing></Signing>,
         },
         {
            path: "/appoinment/:id",
            element:<Privateroute><Appoinment></Appoinment></Privateroute> 
         },
         {
            path: "/appoinments",
            element:<AllAppoinment></AllAppoinment>
         }
      ]
   }
]);

export default router;