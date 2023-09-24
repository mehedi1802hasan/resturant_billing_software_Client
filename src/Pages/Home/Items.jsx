import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { ImCross } from 'react-icons/im';


const Items = () => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    const customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
    const [showResults, setShowResults] = useState(false);
    const [customerName, setCustomerName] = useState('');
    // const history = useHistory(); // Get the history object for navigation

    const total = cartData.reduce((sum, item) => item.price + sum, 0);
    const gst = total * 0.14;

    const handleCustomerInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const customerName = form.customerName.value;
        console.log(customerName);
        localStorage.setItem('customerInfo', JSON.stringify(customerName));

        setCustomerName('');

        setShowResults(true);
    };

    const handleDelete = (itemToDelete) => {
        // Filter out the item to delete from the cartData
        const updatedCart = cartData.filter((item) => item._id !== itemToDelete._id);

        // Update the cart data in localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Refresh the component to reflect the updated cart
        window.location.reload();
    };
    useEffect(() => {
        // Clear customerInfo when navigating to another route
        return () => {
            localStorage.removeItem('customerInfo');
        };
    }, []); // The empty dependency array ensures this effect runs only once on component mount

    return (
       <div className='flex justify-between gap-12'>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

     
            {
                cartData.map((item,i)=>(
                    <tr key={item._id} >
                    <th>
                     {i + 1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                         
                
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>
                    {item.price}
                    </td>
                    <th>
                    <button onClick={() => handleDelete(item)} className='text-lg'> <ImCross/></button>
                    </th>
                  </tr>
                ))
            }
      

    </tbody>
</table>
       </div>

<div className=''>
   
<form onSubmit={handleCustomerInfo}>
                <div className="form-control">
                    <label className="label text-center">
                   {customerInfo ?
                     <h3 className='text-center font-serif'>Customare Name:{customerInfo}</h3> : <h3>Please give me customer name for payment purpose</h3>
                   }
                    </label>
                    <input type="text" name='customerName' placeholder="Enter the customer name" className="input input-bordered  md:w-[250px] p-5 rounded-2xl" required />
                </div>
                <button className=' btn-sm btn btn-outline btn-secondary my-2 '>Enter</button>
            </form>
            <div className='mt-9 mb-3'>
     <h4 className="text-lg font-semibold ">GST(14%) : {gst}</h4>
                    <h4 className="text-lg font-semibold ">Total Price: {gst + total}</h4>
     </div>
            {showResults && (
                <>
                   <button className='btn btn-warning btn-sm '>Payment</button>
                </>
            )}

</div>
        
</div>
    );
};

export default Items;
