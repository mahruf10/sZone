import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Viewcart = () => {
    const cartProducts=useLoaderData()
  const handleDelete=(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/addtocart/${_id}`)
  }

    return (
        <div className='w-11/12 mx-auto grid grid-cols-2 bg-base-200'>
            {
                cartProducts.map(cartProduct=><div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={cartProduct.image_url}
      className="max-w-sm rounded-lg shadow-2xl size-72"
    />
    <div>
      <h1 className="text-3xl font-bold">{cartProduct.name}</h1>
      <p className="py-6 text-xl">
      <div className="badge badge-dash badge-secondary text-xl">Price:{cartProduct.price}৳</div>
      </p>
      <button onClick={()=>handleDelete(cartProduct.id)} className="btn btn-primary bg-red-600 text-white p-3 rounded-2xl font-bold">Cancel</button>
    </div>
  </div>
</div>)
            }
          </div>
        
    );
};

export default Viewcart;