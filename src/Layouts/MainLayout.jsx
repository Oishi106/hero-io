import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className=''>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer></ToastContainer>
      
    </div>
  )
}

export default MainLayout