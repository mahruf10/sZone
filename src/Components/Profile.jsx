import React, { useContext } from 'react';
import { Authcontext } from './AuthContext/AuthProvider';
import { FaPen } from "react-icons/fa";
import { IoIosCamera } from "react-icons/io";
const Profile = () => {
   const {user,loading}=useContext(Authcontext)
   
     if(loading){
 return<div className='items-center justify-center flex'>
 <span className="loading loading-bars loading-xl"></span>
 </div>
}
 const editName=()=>{
  console.log('edit button clicked');
  
 }


    return (
      <>
      {user ? <div className='my-10'>
      <div className='justify-center text-center items-center mx-auto  '>
        <div className='w-fit mx-auto justify-center items-center relative my-5'>
           <img className='size-36 md:size-50 rounded-full mx-auto ' src={user? 'https://i.ibb.co/RkHMRQ0D/profile.jpg':'https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg'}/>
       <IoIosCamera className='size-8 absolute bottom-1 right-1'/>
        </div>
       
       <div className='text-center justify-center flex items-center gap-3'>
        <h2 className='font-bold text-4xl my-4 '>{user.displayName} </h2><FaPen onClick={editName}/>
       </div>
       
      </div>

      <div className='mt-5 w-3/4 mx-auto p-5'>
     <p><span className='text-xl font-bold'>Email:</span> {user.email}</p>

        
     <p><span className='font-bold text-xl'> Last Login:</span> {user.metadata.lastSignInTime}</p>
      </div>
        </div> : <p className='text-3xl text-center my-10 text-red-500' > Please Login To See Your Profile</p>}
      </>
        
    );
};

export default Profile;