
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function Root() {
  
  return (
  <>
  
  
  <Navbar></Navbar>
  <Outlet></Outlet>
<Footer></Footer>
  </>

  )
}

export default Root
