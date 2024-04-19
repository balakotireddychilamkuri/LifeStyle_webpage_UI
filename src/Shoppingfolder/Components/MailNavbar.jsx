import React from 'react';
import { FaCar, FaHome } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

const MailNavbar = () => {
  return (
    <div className=' border-2 mt-1 pt-6 bg-black flex justify-between px-16'>
      <div className='Left text-white  gap-10 mb-6 ml flex'>
        <div className='flex items-center'>
          <FaCar />
          <h1 className='ml-2'>Free Shipping</h1>
        </div>
        <div className='flex items-center'>
          <AiFillHome />
          <h1 className='ml-2'>Click & Collect</h1>
        </div>
        <div className='flex items-center'>
          <FaHome />
          <h1 className='ml-2'>Return To Store</h1>
        </div>
      </div>
      <div className='Center'></div>
      <div className='Right text-white  flex'>
        <h1 className='mr-4'>Dowload Our Apps</h1>
        <h1 className='mr-4'>Store Locator</h1>
        <h1>Help</h1>
      </div>
    </div>
  );
};

export default MailNavbar;
