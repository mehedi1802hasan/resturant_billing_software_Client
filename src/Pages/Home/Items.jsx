import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { ImCross } from 'react-icons/im';
import { BsCurrencyRupee } from 'react-icons/bs';
import Swal from 'sweetalert2';


const Items = () => {
    const cartDatainfo = JSON.parse(localStorage.getItem('cart'));
    const itemsName=cartDatainfo.map(item=>item.name)
    console.log('itemsName...',itemsName)
    const customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
    const [cartData,setCartData]=useState(cartDatainfo);
    const [showResults, setShowResults] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [checkoutOpen,setCheckoutOpen]=useState(false);

const itemPrice =cartData.reduce((sum, item) => Number(item.price) + sum, 0);
const gst = itemPrice * 0.05;
const total=itemPrice + gst;
console.log('cartData...',cartData);
console.log('cartDatainfo..',cartDatainfo)
// console.log('customerInfo...',customerInfo)
    const handleCustomerInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const customerName = form.customerName.value;
        console.log(customerName);
        localStorage.setItem('customerInfo', JSON.stringify(customerName));
        setCheckoutOpen(true)
        setCustomerName('');

        setShowResults(true);
    };

    const handleDelete = (itemToDelete) => {
        // Filter out the item to delete from the cartData
        const updatedCart = cartData.filter((item) => item._id !== itemToDelete._id);
        
        console.log('console updated card///',updatedCart)
        // Update the cart data in localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
          setCartData(updatedCart)
        // Refresh the component to reflect the updated cart
        // window.location.reload();
        // setCustomerInfo(updatedCart)

    };
    useEffect(() => {

        // Clear customerInfo when navigating to another route
        return () => {
            localStorage.removeItem('customerInfo');

        };
    }, []); // The empty dependency array ensures this effect runs only once on component mount
 
 const handleCheckOut=()=>{
    console.log(total)

  const checkOut={
  price:total,customerName:customerInfo,items:itemsName
  }
  console.log(checkOut)
  fetch('https://resturant-server-gray.vercel.app/checkout',{
      method:"POST",
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(checkOut)
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Great!',
          text: 'checkout Done ',
          icon: 'success',
          confirmButtonText: 'Done'
        })
      }
  })
  // localStorage.removeItem('customerInfo');
  setCartData([]);
  localStorage.removeItem('customerInfo');
  setCheckoutOpen(false)

}


    return (
       <div className='md:flex justify-between gap-x-14 p-1 lg:p-20 md:p-20 dev '>
         <div className="overflow-x-auto mb-12">
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
    <tbody  >

     
            {
                cartData.map((item,i)=>(
                    <tr key={item._id}>
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
       <div className="divider lg:divider-horizontal"></div> 
<div className=''>
   
<form onSubmit={handleCustomerInfo}>
                <div className="form-control">
                    <label className="label ">
                   {customerInfo ?
                     <h3 className='text-center font-serif'>Customare Name:{customerInfo}</h3> : <h3>Please give me customer name for payment purpose</h3>
                   }
                    </label>
                    <input type="text" name='customerName' placeholder="Enter the customer name" className="input input-bordered w-[300px] lg:w-[300px]  md:w-[250px] p-5 rounded-2xl"   value={customerName} 
            onChange={(e) => setCustomerName(e.target.value)} required />
                </div>
                <button className=' btn-sm btn btn-outline btn-secondary my-2 '>Enter</button>
            </form>
            <div className="divider mt-0 mb-0  "></div>


            <div className='mt-4 mb-3'>
     <div>
     <h3  className=' flex items-center gap-20'><span className='font-serif'>Item </span><span className='flex items-center gap-1'>  <BsCurrencyRupee/> {itemPrice.toFixed(2)}</span> </h3>
     <h4 className="  flex items-center gap-11 my-2"><span  className='text-lg '> <span className='font-serif'>GST</span>(5%) </span>   <span className='flex items-center gap-1'>  <BsCurrencyRupee/> {gst.toFixed(2)}</span> </h4>
     </div>
     <div className="divider mt-0 mb-0 w-8/12"></div>

     <h4 className="text-lg font-semibold  flex items-center gap-16"><span className='text-lg font-serif'>Total </span>  <span className='flex items-center gap-1'>  <BsCurrencyRupee/>  {(total).toFixed(2)}</span> </h4>
     </div>
            { checkoutOpen && (
                <div className=''> 
               <button onClick={handleCheckOut} className='btn btn-warning bg-green-500   '>Processd to checkout</button>
                </div>
            )}

</div>
        
</div>
    );
};

export default Items;