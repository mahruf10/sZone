

import { useContext } from 'react';
import CategoriesSection from './Components/Home/CategoriesSection';
import { Outlet } from 'react-router-dom';
import { Authcontext } from './Components/AuthContext/AuthProvider';


const Home = () => {
    const {setshowall}=useContext(Authcontext)
    const handleshowall=()=>{
        setshowall(true)
    }
    
    return (
      <div className='w-11/12 mx-auto my-8 md:mt-12 lg:mt-25 bg-gray-200 p-8 rounded-3xl'>
     <main className='grid grid-cols-8 md:grid md:grid-cols-12'>
                <aside className='col-span-2 md:col-span-3'>
                    <CategoriesSection></CategoriesSection>
                </aside>
                <div className='col-span-6 md:col-span-8 '>
               <Outlet></Outlet>
                </div>
                <aside className='cols-span-1'> 
                <button onClick={handleshowall} className="btn btn-soft btn-primary bg-blue-700 rounded-2xl p-3 mb-2 h-8 font-bold">Show All</button>
                </aside>
            </main>  
      </div>

          
           
        
    );
};

export default Home;