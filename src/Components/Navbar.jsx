import React from 'react'
import { Link, NavLink } from 'react-router'


const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'     
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li className="text-purple-600 font-semibold">
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="text-purple-600 font-semibold">
              <NavLink to='/app'>Apps</NavLink>
            </li>
            <li className="text-purple-600 font-semibold">
              <NavLink to='/installation'>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className='text-purple-600 flex gap-0.5'>
          <img className='w-[25px]' src="/logo.png" alt="" />
          <Link to='/' className='text-xl font-bold '>
            HERO.IO
          </Link>
        </div>
      </div>
      <div className='navbar-center '>
        <ul className='menu menu-horizontal px-1 hidden lg:flex'>
          <li className="text-purple-600 font-semibold">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="text-purple-600 font-semibold">
            <NavLink to='/app'>Apps</NavLink>
          </li>
          <li className="text-purple-600 font-semibold">
            <NavLink to='/installation'>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-end flex'>
       
        <NavLink to='https://github.com/Oishi106' className='btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white'>
          <img src="/git.png" alt="" />

          Contribute
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
