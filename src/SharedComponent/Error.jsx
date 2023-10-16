import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='bg-[#FCE7F3]'>
                <div className="container mx-auto">
                    
                <div className="flex items-center justify-center">
      <div className="relative w-full">
        <img
          src="https://i.ibb.co/nz50X04/Error-1.png"
          className=" h-[840px] md:h-auto lg:h-auto "
        />
        <div className="absolute inset-0 flex items-center justify-center">
         <Link to='/'>
         <button className="px-5 py-5 absolute  mt-52 ml-[73px] text-yellow-500 bg-white rounded hover:bg-black btn btn-outline btn-primary">
           Click Here
          </button></Link>
        </div> 
      </div>
    </div>
                </div>
        </div>
    );
};

export default Error;