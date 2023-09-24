import React from 'react';

const Items = () => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    const total=cartData.reduce((sum,item)=>item.price + sum,0);
    const gst = (total * 0.14).toFixed(2); 
        const handleDelete = (itemToDelete) => {
        // Filter out the item to delete from the cartData
        const updatedCart = cartData.filter((item) => item._id !== itemToDelete._id);
      
        // Update the cart data in localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      
        // Refresh the component to reflect the updated cart
        window.location.reload();
      };
    return (
        <div>
           <h3 className='text-3xl text-pink-500 font-serif my-16'>  Total AddTOCard Item..{cartData.length}</h3>
           <div className=''>
           {
                cartData.map(item=><div className='flex my-6 gap-12 justify-center items-center'>
                    <h3><img className='h-16 w-16 rounded-3xl' src={item.image} alt="" /></h3>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={()=>handleDelete(item)} className='btn btn-outline'> Delete</button>
                </div>)
            }
           </div>
           <h4 className=' text-3xl font-bold font-serif text-center '>           tax: {gst}
</h4>
<h4 className=' text-3xl font-bold font-serif text-center '> total price : {gst + total}</h4>

        </div>
    );
};

export default Items;