import React, { useState } from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../Components/AppCard'
import SkeletonLoader from '../Components/SkeletonLoader'

const App = () => {
  const { products, loading } = useProducts()
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  console.log(term)
  const searchedProducts = term
    ? products.filter(app =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : products

  return (
    <div>
      <div className='flex justify-between py-5 items-center mx-auto w-11/12'>
        <h1 className='text-3xl font-semibold'>
          All Products{' '}
          <span className='text-sm text-gray-500'>
            ({searchedProducts.length}) Products Found.
          </span>
        </h1>
        <label className='input'>
          <img src="/search.png" alt="" />
          <input
            
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
      </div>
      {loading ? (
        <SkeletonLoader count={16} />
      ) : (
        <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {searchedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App