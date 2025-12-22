import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from './Components/AuthContext/AuthProvider';

const Myequipment = () => {
    const data=useLoaderData()
    const {user}=useContext(Authcontext)
    const userEmail = user?.email
    const result=data.filter(info=>info.userEmail== userEmail)
    // console.log(result);
    return (
        <div className='grid grid-cols-2 w-11/12 mx-auto'>
        
{
  result.length > 0
    ? result.map(equipment => (
        <div key={equipment._id} className="card bg-base-100 w-96 shadow-sm p-5">
          <figure>
            <img className='w-[250px]' src={equipment.image} />
          </figure>
          <div className="card-body bg-gray-200 p-5">
            <h2 className="card-title text-2xl font-bold">{equipment.itemName}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-black text-white rounded-2xl p-3">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))
    : <p className='text-3xl text-red-500 text-center'>No Equipment added.</p>
}

        </div>
    );
};

export default Myequipment;