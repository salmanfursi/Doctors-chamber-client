import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
const [services,setServices]=useState([])
console.log(services);
useEffect(() => {
   fetch('http://localhost:4000/services')
      .then(res => res.json())
      .then(data => {
         setServices(data);
      });
   }, []);
   return (
      <div className=' bg-[#BEF8EA]'>
         <div className="hero p-4 rounded-xl" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/plastic-surgeon-operating-patient-surgery-room_33099-2120.jpg?w=826&t=st=1695301325~exp=1695301925~hmac=1f84d6e8cf0ce78e9aac51308f76539ef71ce8ac6348beca2fd6ca5556056def)' }}>
            <div className="hero-content text-center">
               <div className="max-w-md ">
                  <h1 className="text-5xl text-cyan-800 font-bold">My Services {services.length}</h1>
                  <p className="py-4 font-bold text-cyan-800">Your Smile's Best Friend</p>
               </div>
            </div>
         </div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 p-8 gap-4'>
            {
               services?.map((service) => <ServiceCard
               key={service._id}
               service={service}
               ></ServiceCard>
               )
            }
         </div>
      </div>
   );
};

export default Services;