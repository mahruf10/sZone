import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from './AuthContext/AuthProvider';
import  { useState } from 'react'
import Swal from 'sweetalert2';
const Viewcart = () => {
    const cartProducts=useLoaderData()
     const [currentUser,setcurrentUser]=useState(cartProducts)
    const {user,loading}=useContext(Authcontext)
    const userId=user?.uid
   
    const userCart=currentUser.filter(cart=> cart.userId==userId)
     if(loading){
 return<div className='items-center justify-center flex'>
 <span className="loading loading-bars loading-xl"></span>
 </div>
     }
  const handleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
})
.then((result)=>{
  if(result.isConfirmed){
      fetch(`http://localhost:5000/addtocart/${id}`,{
      method:'DELETE'
    }).then(res=>res.json())
     .then(data=>{
    if(data.deletedCount > 0)
         Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success"
            });
            const remaining=currentUser.filter(user=>user._id!==id)
    setcurrentUser(remaining)
   })
    }

  
})

  
  }


    return (
        <div className='w-11/12 mx-auto grid grid-cols-2 bg-base-200'>
            {
              user ?
              userCart.map(cartProduct=><div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={cartProduct.image}
      className="max-w-sm rounded-lg shadow-2xl size-72"
    />
    <div>
      <h1 className="text-3xl font-bold">{cartProduct.name}</h1>
      <p className="py-6 text-xl">
      <div className="badge badge-dash badge-secondary text-xl">Price:{cartProduct.price}৳</div>
      </p>
      <button onClick={()=>handleDelete(cartProduct._id)}  className="btn btn-primary bg-red-600 text-white p-3 rounded-2xl font-bold">Cancel</button>
    </div>
  </div>
</div>) : <div className='text-red-500 text-4xl my-10 text-center '> "No items available.." </div> 
                
            }
          </div>
        
    );
};

export default Viewcart;