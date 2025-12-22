
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from './Components/AuthContext/AuthProvider';

const Sports = () => {
    const data=useLoaderData()
    const {showAll,setshowAll}=useContext(Authcontext)
const allProducts = data[0].sports_equipment.flatMap(item => item.products);
const shortProduct=allProducts.slice(0,7)
const handleshowall=()=>{
  setshowAll(true)
}
    return (
      <div className='w-11/12 mx-auto'>
        <button onClick={handleshowall} className='bg-blue-600 rounded-xl p-1 h-8 font-bold mb-3 w-25'>Show All</button>
         <div className={'grid grid-cols-2 space-y-5  '}>
          
            {
       showAll ? allProducts.map(metarial=> <div className="card bg-gray-200 p-5 w-96 shadow-md">
  <figure>
    <img
      src={metarial.image_url}
      alt="Sports_Equipment" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-xl">
     {metarial.name}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p>{metarial.details}</p>
    {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div> */}
  </div>
</div>) :shortProduct.map(metarial=> <div className="card bg-gray-200 p-5 w-96 shadow-md">
  <figure>
    <img
      src={metarial.image_url}
      alt="Sports_Equipment" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">
     {metarial.name}
      {/* <div className="badge badge-secondary">{metarial.title}</div> */}
    </h2>
    <p>{metarial.details}</p>
    {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div> */}
  </div>
</div>)


                
            }
        </div>
      </div>
       
    );
};

export default Sports;