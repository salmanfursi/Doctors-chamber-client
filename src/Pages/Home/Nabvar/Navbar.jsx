import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
  const { user, logOut, auth, setLoading } = useContext(AuthContext)
  const photo = user?.photoURL;

  const handleSignout = () => {

    logOut(auth)
      .then((res) => res.json())
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="navbar text-white bg-[#018DCA]">
      <div className="navbar-start">
        <div>
          <Link to={'/'} className="btn btn-ghost normal-case font-bold text-2xl">Doctors chamber</Link>
        </div>
      </div>

      <div>
        <Link to={'/appoinments'} className="btn btn-ghost text-lg font-bold">Appoinments</Link>  
      </div>

      <div className="navbar-end">

        {
          user ?
            <button onClick={handleSignout} className="btn btn-ghost normal-case text-xl">Logout</button>
            :
            <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
        }
        
        <div className="avatar">
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className=" " src={photo} alt="img" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Navbar;