import ProductCard from '../Components/AppCard'
import useProducts from '../hooks/useProducts'
import SkeletonLoader from '../Components/SkeletonLoader'
import { NavLink } from 'react-router'

const Home = () => {
  const { loading, error, products } = useProducts()

  const featuredProducts = products.slice(0, 12)

  return (
    <div className=''>
      <div>
        <h1 className='font-bold text-center text-[45px] md:text-[55px] lg:text-[55px] py-5'>We Build <br /> <span className='text-purple-600 font-bold text-[45px] md:text-[55px] lg:text-[55px]'>Productive</span> Apps</h1>
        <p className='text-[#627382] text-center py-5'>
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <span className='lg:block'> Our goal is to turn your ideas into digital experiences that truly make an impact.

          </span>
        </p>
        <div className='py-5 flex items-center justify-center gap-3'>
          <a className='btn' href="https://play.google.com/store/games?hl=en">
            <img src="/playStore.png" alt="" />
            Google Play
          </a>
          <a className='btn' href="https://www.apple.com/app-store/">
            <img src="/appStore.png" alt="" />
            App Store
          </a>

        </div>
        <img className='container mx-auto w-[700px] h-[500px]' src="/hero.png" alt="" />

        <div className='py-5 text-center bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]   '>
          <h3 className='text-white pb-4 text-[32px] font-bold'>Trusted by Millions,<span  class="block md:inline">Built for You</span> </h3>
          <div className='text-center py-4 lg:flex justify-center items-center gap-17'>
            <div className='py-3'>
              <p className='text-white text-[16px]'>Total Downloads</p>
              <p className='text-white font-extrabold text-[47px]'>29.6M</p>
              <p className='text-white text-[16px]'>21% more than last month</p>
            </div>
            <div className='py-3'>
              <p className='text-white text-[16px]'>Total Reviews</p>
              <p className='text-white font-extrabold text-[47px]'>906K</p>
              <p className='text-white text-[16px]'>46% more than last month</p>
            </div>
            <div className='py-3'>
              <p className='text-white text-[16px]'>Active Apps</p>
              <p className='text-white font-extrabold text-[47px]'>132+</p>
              <p className='text-white text-[16px]'>31 more will Launch</p>
            </div>

          </div>
        </div>

        <h3 className='font-bold text-[40px] text-center'>Trending Apps</h3>
        <p className='text-[#627382] text-[20px] text-center mb-5'>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <div className='flex justify-center items-center my-6'>
        <div className='btn text-white  bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>
          <NavLink to="/app">Show All</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home