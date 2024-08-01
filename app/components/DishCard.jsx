import React from 'react'

const DishCard = () => {
    const Dishes = [
        { name: 'Pasta', price: 100 },
        { name: 'Rice', price: 100 },
        { name: 'Curry', price: 100 },
        { name: 'Bread', price: 100 },
        { name: 'Naan', price: 100 },
        { name: 'Chicken', price: 100 },
        { name: 'Milk', price: 100 },

      ];
  return (
    <div className='p-4'>
        <div className='grid grid-cols-3 gap-4'>
            {Dishes.map((Dish)=> ( <div key={Dish.name} className='border rounded-lg w-46 h-56 bg-pink-100'>
                <div>
                    <h2>{Dish.price}</h2>
                    <h4>{Dish.name}</h4>
                    
                    </div> 
                </div>
        
            ))}
        </div>


    </div>
  )
}

export default DishCard