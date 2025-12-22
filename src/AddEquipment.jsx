import React from 'react';
import Swal from 'sweetalert2';

const AddEquipment = () => {
  const handleform=(e)=>{
    e.preventDefault()
    const form=e.target
    const image=form.image.value
    const itemName=form.itemName.value 
    const category=form.category.value 
    const description=form.description.value 
    const price=form.price.value 
    const rating=form.rating.value 
    const customization=form.customization.value 
    const stockStatus=form.stockStatus.value 
    const userName=form.userName.value 
    const userEmail=form.userEmail.value 
    const equipment={image,itemName,category,description,price,rating,customization,stockStatus,userName,userEmail}
    console.log(equipment);
     
     {
      if(!equipment.itemName || 
      !equipment.category || 
      !equipment.price || 
      !equipment.description
    ){
 Swal.fire({
         icon:"error",
         title:"please fill up all blank file"
         
      });
      return;
      }
    
      else{
        fetch('http://localhost:5000/equipment',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(equipment)
     })
      Swal.fire({
        icon: "success",
       
        text: "Equipment successfully added!",
      
      });
     }
     
    }
    form.reset()
}
    return (
      <form onSubmit={handleform}> 
 <div className='w-11/12 mx-auto'>
       <div className=' grid grid-cols-2 gap-y-2 gap-x-4 justify-center items-center mt-8 mb-5'>
       <input name='image' type="text" placeholder="Image" className="input w-full input-neutral border border-1 p-4 rounded-2xl" /> 
       <input name='itemName' type="text" placeholder="Item name" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
       <input name='category' type="text" placeholder="Category" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
       <input name='description' type="text" placeholder="Description" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
       <input name='price' type="text" placeholder="Price" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
       <input name='rating' type="text" placeholder="Rating" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
       <input name='customization' type="text" placeholder="Customization" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
       <input name='stockStatus' type="text" placeholder="Stock Status" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
       <input name='userName' type="text" placeholder="User Name" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
       <input name='userEmail' type="text" placeholder="User Email" className="input w-full input-neutral border border-1 p-4 rounded-2xl" />
        </div>
      <button className="btn btn-block border border-1 rounded-2xl  mb-8 bg-black text-white">Submit</button>
        </div>
      

      </form>
       
    
       
    );
};

export default AddEquipment;