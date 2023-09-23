import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Nabvar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";

const Main = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet />
         <Footer></Footer>
      </div>
   );
};

export default Main;