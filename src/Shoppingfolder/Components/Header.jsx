import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa'


const Header = () => {
  return (
    <div className='headerSection flex justify-between  text-black px-10' >
        
        <div className='Center mt-6'>
            <ul className='flex space-x-9'>
                <li className='ml-5'>LifeStyle</li>
                <li>Woman</li>
                <li>Men</li>
                <li>Children</li>
                <li>Shoes& Bags</li>
                <li>Gen Z</li>
                <li>Home & Living</li>
                <div className="relative flex items-center border border-gray-300 rounded-md p-2 md:w-72 sm:pl-2">
                     <span className="absolute left-2 text-blue-500">&#128269;</span>

                    <input type="text" className="flex-1 border-none outline-none pl-10" placeholder="Search..." />
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-1 cursor-pointer">Search</button>
                </div>
                <h1>More</h1>
            

            </ul>
            
            
        </div>
        
        <div className='right mt-6 flex space-x-6 mr-[40px]'>
            
            <h3>Signin/SignUp</h3>
            <h3>Cart</h3>
           <div>  <FaHeart /></div>
           <div>  <FaShoppingBag /></div>
        </div>
        

    </div>
  )
}

export default Header
