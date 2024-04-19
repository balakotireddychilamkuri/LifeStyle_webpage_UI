import React from 'react'


const Header = () => {
  return (
    <div className='headerSection flex justify-between bg-blue-300' >
        <div className='Left mt-6  mx-20'>
            <h1>lifestyle</h1>
        </div>
        <div className='Center mt-6'>
            <ul className='flex space-x-10'>
                <li>Woman</li>
                <li>Men</li>
                <li>Children</li>
                <li>Beauty</li>
                <div className="relative flex items-center border border-gray-300 rounded-md p-2 md:w-72 sm:pl-2">
                     <span className="absolute left-2 text-blue-500">&#128269;</span>

                    <input type="text" className="flex-1 border-none outline-none pl-10" placeholder="Search..." />
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-1 cursor-pointer">Search</button>
                </div>

            </ul>
            
            
        </div>
        
        <div className='right mt-6 flex space-x-6 mr-20'>
            <h3>Signin/SignUp</h3>
            <h3>Cart</h3>
        </div>
        

    </div>
  )
}

export default Header
