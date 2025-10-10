import React from 'react'

const Footer = () => {
  return (
    <footer className="footer  bg-[#001931] text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10">
      <div className=' mr-3'>
        <div className='flex justify-center items-center gap-1'>
          <img className='w-[35px]' src="/logo.png" alt="" />
          <h4 className='text-gray-400 text-[17px] font-bold'>Hero Apps</h4>
        </div>
        <div>
          <p className='text-white '>
              Hero Apps offers powerful yet simple tools to organize your schedule, boost productivity, and stay focused. From planners to creative utilities, each app is designed to make daily tasks easier, faster, and more enjoyable — helping you achieve more with clarity and confidence.
          </p>
        </div>
      </div>
      <nav>
        <h6 className="text-white font-bold footer-title">About Hero Apps</h6>
        <a className=" text-white link link-hover">Branding</a>
        <a className=" text-white link link-hover">Design</a>
        <a className=" text-white link link-hover">Marketing</a>
        <a className=" text-white link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-white font-bold footer-title">About Hero Apps</h6>
        <a className=" text-white link link-hover">About us</a>
        <a className=" text-white link link-hover">Contact</a>
        <a className=" text-white link link-hover">Jobs</a>
        <a className=" text-white link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-white">Social Icons</h6>
        <div className="grid grid-flow-col gap-4">
          <img src="/facebook.png" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/instagram.png" alt="" />


        </div>
      </nav>

      
    </footer>
  )
}

export default Footer
