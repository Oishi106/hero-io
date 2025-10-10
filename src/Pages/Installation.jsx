import React, { useState } from 'react'
import { getlist, deletelist } from '../utils/localStorage'
import Installationcard from '../Components/Installationcard'
import { toast } from 'react-toastify'

const Installation = () => {
  const [list, setList] = useState(() => getlist() || [])
  const [sort, setSort] = useState('none')

  if (!list.length) return <div className='text-center text-3xl font-bold mt-20'>No App Installed</div>

  const sortedItem = (() => {
    if (sort === 'asc') {
      return [...list].sort((a, b) => a.size - b.size) 
    } else if (sort === 'desc') {
      return [...list].sort((a, b) => b.size - a.size) 
    } else {
      return list
    }
  })()

  const handleremove = (id) => {
    toast("App uninstalled")
    deletelist(id)
    setList(prev => prev.filter(app => app.id !== id))
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center py-5 w-full px-6'>
        <h1 className='text-2xl font-semibold'>({list.length}) Apps Found</h1>
        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="none">Sort by Price</option>
            <option value="asc">Low To High</option>
            <option value="desc">High To Low</option>
          </select>
        </label>
      </div>

      <div className='space-y-4'>
        {sortedItem.map(app => (
          <Installationcard
            key={app.id}
            app={app}
            onRemove={() => handleremove(app.id,app)}
          />
        ))}
      </div>
    </div>
  )
}

export default Installation
