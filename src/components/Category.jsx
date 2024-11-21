import React from 'react'
import {categories} from '../Data/data'

const Category = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4 py-12'>
        <h1 className=' font-bold text-4xl text-orange-600 text-center'>Top Rated Menu Items</h1>
    <div className=' grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {
            categories.map((items,index)=>(
<div key={index} className=' rounded-lg bg-gray-100 flex justify-between items-center p-2 hover:scale-105 duration-300 cursor-pointer'>
    <h2 className=' font-bold sm:text-xl '>{items.name}</h2>
    <img className=' w-20' src={items.image} alt={items.name} />

</div>
            ))
        }

    </div>
    </div>
  )
}

export default Category