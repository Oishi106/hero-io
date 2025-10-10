import { Link } from 'react-router'

const AppCard = ({ product }) => {
  const { title, image, downloads, ratingAvg,id } = product
  return (
    <div  className='card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out'>
      <Link to={`/app/${id}`}>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <div className='flex justify-between items-center'>
          <div className="btn border-none btn-active ">
            <img src="/download.png" alt="" />
            <p className='text-[#00D390]'>{downloads}M</p>
          </div>
          <div className="btn border-none btn-active ">
            <img src="/star.png" alt="" />
            <p className='text-[#FF8811]'>{ratingAvg}</p>
          </div>
        </div>
      
      </div>
      </Link>
    </div>
  )
}

export default AppCard
