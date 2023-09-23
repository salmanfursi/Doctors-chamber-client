import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Appoinment = () => {
   const {user} = useContext(AuthContext);
   const [selected, setSelected] = useState();
   let footer = <p>Please pick a day.</p>;

   if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!selected) {
         return alert("please fixed a date first" )
      }
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value
      const date = selected
      const book = { name, email, date }
      fetch('http://localhost:4000/appoinment', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(book)
      })
         .then(response => response.json())
         .then(response => {
            if(response.acknowledged == true){
              console.log(response);
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your Appoinment has been saved',
                  showConfirmButton: false,
                  timer: 1000
                })
            }
         }
            )
   }


   return (
      <form onSubmit={handleSubmit}>
         <div className="hero lg:h-[500px] bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="form-control bg-base-200 rounded-lg">
                  <DayPicker
                     mode="single"
                     selected={selected}
                     onSelect={setSelected}
                     footer={footer}
                  />
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">booking</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </form>
   );
};

export default Appoinment;