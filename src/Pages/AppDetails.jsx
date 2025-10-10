import React from 'react'
import { useParams } from 'react-router'
import useProducts from '../hooks/useProducts'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const AppDetails = () => {
 const {id}=useParams()
 const {products,loading}=useProducts()
 if(loading) return <div>Loading........</div>
 const app=products.find(p=>p.id===Number(id))

 const {image,title,downloads,ratingAvg,companyName,reviews,ratings,description,size}=app || {}


  return (
  <div>
    
    <div className=' flex flex-col md:flex-row  max-h-[400px] items-center gap-5  p-5  bg-base-300  rounded-2xl mx-auto w-11/12'>
    
    <div className=' ml-10 '>
      <img className='p-4 max-h-[300px]  rounded-4xl object-contain' src={image} alt="" />
    </div>
    
    <div>
   <div className='mb-3 border-b-1 border-gray-300 pb-3 '>
     <h1 className='font-bold text-4xl'>{title}</h1>
    <h1 >Developed by <span className='text-purple-700'>{companyName}</span> </h1>
   </div>
   <div className='flex gap-3 items-center'>
     <div>
      <img src="/download.png" alt="" />
      <h3 className='font-semibold text-gray-400  text-[10px]'>downloads</h3>
      <h1 className='font-bold'>{downloads}M</h1>
    </div>
    <div>
        <img src="/star.png" alt="" />
      <h3 className='font-semibold text-gray-400 text-[10px]'>Average Rating</h3>
      <h1 className='font-bold'>{ratingAvg}</h1>
    </div>
    <div>
        <img className='h-5' src="/revlike.png" alt="" />
      <h3 className='font-semibold text-gray-400 text-[10px]'>Total Reviews</h3>
      <h1 className='font-bold'>{reviews}K</h1>
    </div>
    
   </div>
   <button className="btn sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#00D390] h-12 mt-6">Install Now {size}MB</button>
    </div>
  </div>
  {/* chart part */}
<div className='bg-base-100 border rounded-2xl p-3  h-[600px]  my-3 mx-auto w-11/12'>
    <h1 className='my-3 text-2xl font-bold'>Ratings</h1>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={[...ratings].reverse()} layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
        type='number' />
        <YAxis dataKey="name" 
        type='category'
         tick={{ fontSize: 12, fill: "#333" }}/>
        <Tooltip />
        <Legend />
        <linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
        <Bar dataKey="count" fill="url(#yellowGradient)" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
</div>
{/* description part */}
<div className='bg-base-100 border-t-1  p-5 my-5 mx-auto w-11/12'>
    <h1 className='font-bold text-3xl mb-3'>Description</h1>
    <p className='p-3 text-xl'>{description}</p>
</div>
  </div>
  )
}

export default AppDetails
