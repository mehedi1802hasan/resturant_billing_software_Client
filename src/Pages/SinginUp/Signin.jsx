import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
   
      <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     <img src="https://i.ibb.co/By3vB3N/tablet-login-concept-illustration-114360-7883.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
      <div className="card-body font-serif">
       <div className='mb-2'>
       <h3 className='text-2xl mb-2 font-bold font-serif'>Sign In </h3>
        <p className='text-xl'>Enter your details to Login.</p>
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  btn-warning">Login</button>
        </div>
        <h3 className='mt-3'>Already have an account? <Link className='text-blue-500 font-serif' to='/signup'>Sign Up</Link> </h3>

      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Signin;