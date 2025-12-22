import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCartCheckFill } from "react-icons/bs";
import { Authcontext } from '../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
const ProductSection = () => {
  const { user, loading } = useContext(Authcontext)
  const { slug } = useParams()
  const [product, setproduct] = useState([])
  const [cart, setCart] = useState(0)
   const{showall}=useContext(Authcontext)
  let { setshowCart, setprice, price } = useContext(Authcontext)

  useEffect(() => {
    fetch(`http://localhost:5000/products?category=${slug}`)
      .then(res => res.json())
      .then(data => {

        const result = data[0].sports_equipment.find(c => c.title == slug)
        setproduct(result ? result.products : [])
      })
  }, [slug])
  //  console.log(product);
 

  const visibleItem=product.slice(0,3)

  const addtoCart = (tk,cartProduct) => {
    if (user) {
      setCart(prev => prev + 1);

       const cartData = {
      userId: user.uid,  
      productId: cartProduct.id,
      name: cartProduct.name,
      price: cartProduct.price,
      image: cartProduct.image_url,
      quantity: 1
    };


   fetch('http://localhost:5000/addtocart',{
  method:'POST',
  headers:{
    'content-type':'application/json',
  },
  body:JSON.stringify(cartData)
   })
  console.log(cartData);
  

      const money =parseFloat(price)
      const taka =parseFloat(tk)
      // console.log(id)
      setprice(money+taka)
      Swal.fire({

        text: "Equipment successfully added!",

      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Sorry you have to login first."
      });

    }
  };
useEffect(() => {
  setshowCart(cart);
}, [cart]);

  if (loading) {
    return <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
  }

  return (
    <div className='md:grid md:grid-cols-2 gap-y-5 p-10 gap-5 w-[930px] '>

      {  
        showall ? product.map(pro => <div className="hero bg-base-200 rounded-2xl h-[350px] ">
          <div className="hero-content  flex-col lg:flex-row">
            <img
              src={pro.image_url}
              className="max-w-md w-[210px]  block p-4 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold">{pro.name}</h1>
              <p className="py-6 font-light">
                {pro.details}
              </p>
              <p>price:{pro.price}৳</p>

              <button onClick={() => addtoCart(pro.price,pro)} className="btn btn-primary mt-2  bg-black text-white p-2 h-8 rounded-2xl"><BsCartCheckFill /> Add to cart</button>
            </div>
          </div>
        </div>):
        visibleItem.map(pro => <div className="hero bg-base-200 rounded-2xl h-[350px] ">
          <div className="hero-content  flex-col lg:flex-row">
            <img
              src={pro.image_url}
              className="max-w-md w-[210px]  block p-4 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold">{pro.name}</h1>
              <p className="py-6 font-light">
                {pro.details}
              </p>
              <p>price:{pro.price}৳</p>

              <button onClick={() => addtoCart(pro.price,pro)} className="btn btn-primary mt-2  bg-black text-white p-2 h-8 rounded-2xl"><BsCartCheckFill /> Add to cart</button>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default ProductSection;