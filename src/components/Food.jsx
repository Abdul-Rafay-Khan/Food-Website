import React, { useState } from "react";
import {data} from "../Data/data"

const Food = () => {
    const [foods, setFoods] = useState(data)
   const filterType =(category)=>{
setFoods(
    data.filter((items)=>{
        return items.category === category;
    })
)
   }
   const filterPrice =(price)=>{
    setFoods(
        data.filter((items)=>{
            return items.price === price;

        })
    )

   }
    
  return (
    <div className=" max-w-[1640px] mx-auto p-4 py-12 ">
      <h1 className=" font-bold text-orange-600 text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className=" flex flex-col justify-between lg:flex-row">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div>
            < button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1" onClick={()=>setFoods(data)}>
              All
            </button>
            <button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1" onClick={()=>filterType('burger')}>
              Burgers
            </button>
            <button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1"onClick={()=>filterType('pizza')}>
              Pizza
            </button>
            <button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1" onClick={()=>filterType('salad')}>
              Salad
            </button>
            <button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1" onClick={()=>filterType('chicken')}>
              Chicken
            </button>
          </div>
        </div>

        <div>
          <p className=" font-bold text-gray-700">Filter Price</p>
          <div>
          <button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1" onClick={()=>filterPrice('$')}>
             $
            </button>
            <button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1"  onClick={()=>filterPrice('$$')}>
              $$
            </button>
            <button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1"  onClick={()=>filterPrice('$$$')}>
              $$$
            </button>
            <button className="border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full m-1"  onClick={()=>filterPrice('$$$$')}>
              $$$$
              </button>
          </div>
        </div>
      </div>

      <div  className=" grid grid-cols-2 lg:grid-cols-4 gap-6 py-4">
        {
            foods.map((items,index)=>(
<div key={index} className=" border rounded-lg shadow-lg hover:scale-105 duration-300">

    <img className=" w-full h-[200px] object-cover rounded-t-lg" src={items.image} alt={items.name}/>
    <div className=" flex p-4 justify-between items-center">
        <p className=" font-bold text-xl">{items.name}</p>
        <p><span className="  bg-orange-600 py-1 px-3 rounded-full cursor-pointer">{items.price}</span></p>
    </div>

</div>
            ))
        }

      </div>
    </div>
  );
};

export default Food;
