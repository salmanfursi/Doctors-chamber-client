import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AppoinmentList = ({ appoinment, appoinments, setAppoinment }) => {

   const { _id, name, email, date, status } = appoinment
console.log(status);
   const { user } = useContext(AuthContext)
   const photo = user?.photoURL;
   const URL = `http://localhost:4000/appoinment/${_id}`;

   const handledelete = () => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(URL, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(result => {
                  if (result.deletedCount === 1) {
                     Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                     )
                     const remaining = appoinments.filter(appoinment => appoinment._id !== _id)
                     setAppoinment(remaining)
                  }
               })
               .catch(err => console.error(err));
         }
      })
   }

   const handleupdate = () => {
      fetch(URL, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ status: 'paid' })
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
               Swal.fire(
                  'update !',
                  'Your file update successfully.',
                  'success'
               )

                const remaining = appoinments.filter(appoinment => appoinment._id !== _id)
               const updated = appoinments.find(appoinment => appoinment._id === _id)
               updated.status = 'paid'
               const updatedapoin = [updated, ...remaining]
               setAppoinment(updatedapoin)

            }
         })
         .catch(err => console.log(err));
   }


   return (
      <tr className=" text-2xl bg-base-200 shadow-xl outline outline-indigo-300">

         <td>
            <button onClick={handledelete} className='btn btn-ghost text-2xl'>X</button>
         </td>
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                     <img src={photo} />
                  </div>
               </div>
               <div>
                  <div className="font-bold ">{name}</div>
               </div>
            </div>
         </td>
         <td>
            <span>{email}</span>
         </td>

         <td>
            <span>{date}</span>
         </td>
         <td>
            {
               status === 'paid' ? <span className="text-3xl font-bold text-lime-700">paid</span>
               : <button onClick={handleupdate} className="btn btn-ghost text-2xl">pay</button>
            }
         </td>

      </tr>
   );
};

export default AppoinmentList;