import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homeslider from './Components/Home/Homeslider.jsx';
import Home from './Home.jsx';
import AuthProvider from './Components/AuthContext/AuthProvider.jsx';
import ProductSection from './Components/Home/ProductSection.jsx';
import Login from './Components/Home/Login.jsx';
import Register from './Components/Home/Register.jsx';
import Navbar from './Components/Navbar.jsx';
import Sports from './Sports.jsx';
import AddEquipment from './AddEquipment.jsx';
import Footer from './Components/Footer.jsx';
import Myequipment from './Myequipment.jsx';
import Viewcart from './Components/Viewcart.jsx';
import Profile from './Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,   // Root layout — এখানে Outlet আছে
    children: [
      {
        path: "/",
        element: (
          <>
            <Homeslider />
            <Home />       {/* এর ভিতরে আবার Outlet আছে */}
          </>
        ),
        children: [
          {
            path: "category/:slug",
            element: <ProductSection />,   // Category অনুযায়ী এখানে show হবে
           
          }
        ]
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
  },
  {
    
path:'register',
element:
<>
<Navbar></Navbar>
<Register></Register>

</>

   
  },{
    path:'sports',
    element:
    <> 
    <Navbar></Navbar>,
    <Sports></Sports>,
    </>,
   
    loader:()=>fetch("http://localhost:5000/products")
    
  },
{
path:'/addEquipment',
element:
<>
<AddEquipment></AddEquipment>
<Footer></Footer>
</>

},{
  path:'/myequipment',
  element:
  <> <Navbar></Navbar>,
    <Myequipment></Myequipment>,
  </>,
  loader:()=>fetch('http://localhost:5000/equipment')
},{
  path:'/viewcart',
  element:
  <><Viewcart></Viewcart>,
  <Footer></Footer>
  </>,
  loader:()=>fetch('http://localhost:5000/addtocart')
},{
  path:'/profile',
  element:<Profile></Profile>,
  loader:()=>fetch('http://localhost:5000/users')
}

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
         <RouterProvider router={router} />
    </AuthProvider>
 
  </StrictMode>,
)
