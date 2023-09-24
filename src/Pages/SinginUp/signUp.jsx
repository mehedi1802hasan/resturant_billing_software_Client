import React from 'react';
import { Link } from 'react-router-dom';

const signUp = () => {
    return (
        <div>
        
          <div className="hero min-h-screen bg-base-100">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left">
       <img className='' src="https://i.ibb.co/BTJqr2v/business-people-writing-agreement-shaking-hands-tiny-man-with-magnifying-glass-researching-checklist.jpg" alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-lg  bg-base-100">
        <div className="card-body font-serif">
         <div className='mb-2'>
         <h3 className='text-2xl mb-2 font-bold font-serif'>Sign Up </h3>
          <p className='text-xl'>Enter your details to register.</p>
         </div>
         <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="enter your name" className="input input-bordered w-96" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered w-96" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered w-96" />
          
          </div>
          <div className="form-control mt-6 w-96">
            <button className="btn  btn-warning">Registration</button>
          </div>
          <h3 className='mt-3'>Already have an account? <Link className='text-blue-500 font-serif' to='/signin'>Sign In</Link> </h3>

        </div>
      </div>
    </div>
  </div>
      </div>
    );
};

export default signUp;