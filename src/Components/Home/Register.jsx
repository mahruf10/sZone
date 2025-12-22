import React, { useContext } from 'react';
import { Authcontext } from '../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(Authcontext);

    const handlesubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const email = form.Email.value;
        const password = form.password.value;
        const photo=form.photo.value

   

        // যদি তুমি image upload করো (imgBB বা অন্য API দরকার)
     

        const userinfo = { photo, name, email };
        console.log(userinfo);

        try {
            const userCredential = await createUser(email, password);
            const user = userCredential.user;

            // ⭐ Firebase DisplayName & photoURL update
            await updateProfile(user, {
                displayName: name,
                photoURL: photo
            });

            // Backend এ save
            await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userinfo)
            });

            Swal.fire({
                icon: "success",
                title: "User successfully registered!",
            });

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'Maybe email was already used',
            });
            console.error(error);
        }
    };

    return (
        <div >
            <form onSubmit={handlesubmit} className="justify-center items-center mx-auto my-10  fieldset  border-base-300 rounded-box w-xs border p-4">

                <label className="label">Name</label> 
                <input name='name' type="text" className="input bg-gray-200 rounded-2xl p-3" placeholder="Enter your name" />

                <label className="input validator">
  <input
    type="url"
    name='photo'
    placeholder="Enter Your Photo URL"
    className='bg-gray-200  rounded-2xl p-3'
    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
    
  />
</label>


                <label className="label">Email</label>
                <input required name='Email' type="text" className="input bg-gray-200 rounded-2xl p-3" placeholder="Enter Your Email" />

                <label className="label">Password</label>
                <input required name='password' type="password" className="input bg-gray-200 rounded-2xl p-3" placeholder="Enter Your password" />

                <button className="btn btn-neutral bg-black text-white text-xl rounded-3xl">Register</button>

            </form>
        </div>
    );
};

export default Register;
