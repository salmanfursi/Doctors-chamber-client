import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Privateroute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);

   if (loader) {
      return <span className="loading loading-infinity loading-lg"></span>;
   }

   if (user?.email) {
      return children;
   }
   const from = (location.state && location.state.from) || "/";
   // Use Navigate for programmatic redirection
   return <Navigate to="/login" state={{ from }} />;
};

export default Privateroute;