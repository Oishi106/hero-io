  import { useRouteError } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { NavLink } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <Navbar />
      <div className='text-center py-5'>
          <img className='container mx-auto w-[400px] h-[350px]' src="/error-404.png" alt="" />
          <h2 className='font-semibold text-[48px]'>Oops, page not found!</h2>
          <p className='text-[#627382] py-3 text-[20px]'>The page you are looking for is not available.</p>
          <div className='btn text-white py-3 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>
            <NavLink to="/">Go Back</NavLink>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage