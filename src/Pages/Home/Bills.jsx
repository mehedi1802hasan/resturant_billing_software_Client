import React, { useEffect, useState } from 'react';

const Bills = () => {
    const [checkout,setCheckout]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/checkout')
    .then(res=>res.json())
    .then(data=>setCheckout(data))
   },[])
    return (
        <div className='py-10'>
            <h3 className='text-center text-3xl'>Total CheckOut : {checkout.length}</h3>
       <div className='w-9/12 mx-auto'>
       <div className="overflow-x-auto">
       <table className="table">

       <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
        {
            checkout.map((check,i)=>< >

<tbody>
      {/* row 1 */}
      <tr key={check._id} className="bg-base-200">
        <th> {i + 1}</th>
        <td>{check.customerName}</td>
        <td>{check.price}</td>
        <td> <button className="btn btn-outline btn-success">Download</button></td>
      </tr>
      </tbody>



                
          {/* <div className='flex gap-5'>
            <h3>{check.customerName}</h3>
            <h3>{check.price}</h3>
            <button className="btn btn-outline btn-success">Download</button>
          </div> */}

            </>)
        }
        </table>
       </div>
       </div>
       
        </div>
    );
};

export default Bills;