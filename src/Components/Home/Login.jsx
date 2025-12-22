import React, { useContext } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { Authcontext } from '../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebase.config';
const Login = () => {
  const{loginUser}=useContext(Authcontext)
  const navigate=useNavigate()
  const handleform=(e)=>{
    e.preventDefault()
    const form=e.target 
    const email=form.email.value
    const password=form.password.value

 loginUser(email,password)
 .then(data=>{
  Swal.fire({
    icon:"success",
    title:"User successfully login."
    
 });
  console.log(data);
  form.reset()
 
 }).catch(error=>{
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Invalid email or password.Please try again",

});
 })

  }

const handlegoogle=()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth,provider)
  .then((result)=>{
 Swal.fire({
    icon:"success",
    title:"User successfully login."
 });
  }
)
}
  navigate('/')


    return (
        <div>
           <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body p-8">
        <form onSubmit={handleform} className="fieldset">
            <h1 className="text-5xl font-bold">Login now!</h1>
          <label className="label">Email</label>
          <input name='email' type="email" className="input p-3 bg-gray-200 rounded-xl" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input p-3 bg-gray-200 rounded-xl" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 bg-black text-white rounded-xl text-[18px]">Login</button>
       
       <p>Do you have an Account? <NavLink to={'/register'} className={'hover:text-blue-500 underline'}>Register</NavLink></p>
       


        </form>
        <div className="flex w-full flex-col">
  <div className="divider">OR</div>
 <button onClick={handlegoogle} className="btn bg-white text-black border-[#e5e5e5] border border-1 rounded-2xl">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
</div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;