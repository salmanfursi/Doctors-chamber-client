import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import AppoinmentList from './AppoinmentList';

const AllAppoinment = () => {
   const [appoinments, setAppoinment] = useState([])
   const { user } = useContext(AuthContext)
   const url = `http://localhost:4000/appoinment?email=${user?.email}`;
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setAppoinment(data)
            console.log("all apoinment data", data);
         })
         .catch(err => console.log(err))

   }, [user]);



   return (
      <div className="px-12 overflow-x-auto">
         <h1 className='text-center font-bold'>Appoinment:{appoinments?.length || "No appoinments"}</h1>
         <table className="table">
            {/* head */}
            <thead>
               <tr  className='text-2xl'>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
              
                  {
                     appoinments?.map((appoinment) => (
                       <AppoinmentList
                       key={appoinment._id}
                       appoinment={appoinment}
                       appoinments={appoinments}
                       setAppoinment={setAppoinment}
                       ></AppoinmentList>
                       ))
                  }

            </tbody>

         </table>
      </div>
   );
};

export default AllAppoinment;