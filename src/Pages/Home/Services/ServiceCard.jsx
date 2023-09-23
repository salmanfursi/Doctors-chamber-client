import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
   const { _id,image_url, price, description, title } = service
   return (
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
               <h1 className="card-title font-serif">{title}</h1>
               <p className='font-serif'>{description}</p>
               <div className="font-serif card-actions justify-between items-center">
                  <p className="card-title">Price {price}</p>

                  <Link to={`/appoinment/:${_id}`}>
                  <button className="btn btn-primary">book now</button>
                  </Link>
                  
               </div>
            </div>
         </div>
   );
};

export default ServiceCard;