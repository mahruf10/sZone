import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const CategoriesSection = () => {
  const navigate=useNavigate()
  useEffect (()=>{
    navigate('/category/Ball Sports')
  },[])


    return (
        <div className='p-y-4 '> 

          <NavLink  to={'/category/Ball Sports'}>
            <button className='btn bg-teal-600 rounded-3xl p-5 h-10 font-bold'>
                Ball Sports Equipment
            </button>
          </NavLink> <br />

          <NavLink to={'/category/Fitness Equipment'}>
            <button className='btn bg-teal-600 rounded-3xl p-5 mt-4 h-10 font-bold'>
                Fitness Equipment
            </button>
          </NavLink><br />

          <NavLink to={'/category/Protective Gear'}>
            <button className='btn bg-teal-600 rounded-3xl mt-4 p-5 h-10 font-bold'>
                Protective Gear
            </button>
          </NavLink><br />

          <NavLink to={'/category/Sports Cycle'}>
            <button className='btn bg-teal-600 rounded-3xl mt-4 p-5 h-10 font-bold'>
                Sports Cycle
            </button>
          </NavLink><br />

          <NavLink to={'/category/Bat Sports'}>
            <button className='btn bg-teal-600 rounded-3xl mt-4 p-5 h-10 font-bold'>
                Bat Sports
            </button>
          </NavLink><br />

        </div>
    );
};

export default CategoriesSection;
