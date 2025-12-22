import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Authcontext } from './AuthContext/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user,logoutUser,loading}=useContext(Authcontext)
  // console.log(user);
  let {showCart,price}=useContext(Authcontext)
  const handlelogout=()=>{
       logoutUser()
   
      Swal.fire({
  icon: "success",
  title: "User logged Out",
  text: "SignIn Now",

});
  }




  if(loading){
 return<div className='items-center justify-center flex'>
 <span className="loading loading-bars loading-xl"></span>
 </div>
}




    return (
        <div className=' md:w-11/12 mx-auto'> 
            <div className=" navbar bg-base-100 shadow-sm">
  <div className="flex-1 p-4">
    <NavLink to={'/'} className="btn btn-ghost text-3xl font-serif border-2 p-3 bg-sky-400 font-bold">sZone</NavLink>
         {/* <span className="text-rotate text-3xl">
  <span className="justify-items-center">
    <span className='text-yellow-400'>FITNESS</span>
    <span className='text-red-400'>EXCERCISE</span>
    <span className='text-purple-500'>HARDWORLING</span>
    <span className='text-pink-400'>PLAYING</span>
    <span className='text-green-400'>ENJOYING</span>
    <span className='text-indigo-400'>REPEAT</span>
  </span>
</span> */}
  </div>
 
<div className="navbar-center  lg:flex ">
   <ul className="menu menu-horizontal px-1 gap-8 ">
    <NavLink  className={({isActive})=> isActive?'bg-blue-400 p-1 rounded-2xl':''} to={'/'}> <li>Home</li></NavLink>
      <li>
     <NavLink  className={({isActive})=> isActive?'bg-blue-400 p-1 rounded-2xl':''} to={'/sports'}>All Sports Equipment </NavLink> 
      </li>
      { user &&
  <>
      <NavLink className={({isActive})=> isActive?'bg-blue-400 p-1 rounded-2xl':''} to={'/myequipment'}><li>My Equipment List</li> </NavLink>  
     <NavLink className={({isActive})=> isActive?'bg-blue-400 p-1 rounded-2xl':''} to={'/addEquipment'}> <li>Add Equipment</li> </NavLink> 
    </>
     
      }
      
    </ul>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">{showCart}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold p-5">{showCart} Items</span>
          <span className="text-info p-5">Subtotal:{price}৳</span>
          <div className="card-actions  items-center justify-center p-3">
         <NavLink to={'/viewcart'}> <button  className="btn btn-primary btn-block  rounded-2xl bg-green-500 w-35">View cart</button> </NavLink>   
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end p-6">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src={user? user.photoURL :'https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg'}/>
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <NavLink to={'/profile'}>
          <button>
          Profile
          </button>
          </NavLink>
        </li>
       
       { user ? <li><button onClick={handlelogout}>  Logout </button> </li> :<li> <NavLink to={'/login'}>Login </NavLink></li>
       }
        

      </ul>
    </div>
  </div>
</div>
</div>
    
    );
};

export default Navbar;