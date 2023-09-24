import React from 'react';

const Items = () => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
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
            {
                cartData.map(item=><div className='flex gap-12 justify-center items-center'>
                    <h3><img className='h-16 w-16 rounded-3xl' src={item.image} alt="" /></h3>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={()=>handleDelete(item)} className='btn btn-outline'> Delete</button>
                </div>)
            }

        </div>
    );
};

export default Items;