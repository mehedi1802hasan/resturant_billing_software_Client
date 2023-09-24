import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

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
        // ... (your existing code)

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
        <div>
            <h3 className='text-3xl text-pink-500 font-serif my-16'>  Total AddTOCard Item..{cartData.length}</h3>
            <div className=''>
                {cartData.map((item) => (
                    <div className='flex my-6 gap-12 justify-center items-center' key={item._id}>
                        <h3><img className='h-16 w-16 rounded-3xl' src={item.image} alt="" /></h3>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => handleDelete(item)} className='btn btn-outline'> Delete</button>
                    </div>
                ))}
            </div>
            <form onSubmit={handleCustomerInfo}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Customer-Name</span>
                    </label>
                    <input type="text" name='customerName' placeholder="Enter your Product name" className="input input-bordered  md:w-[400px] p-5 rounded-2xl" required />
                </div>
                <button className='btn btn-outline'>Save</button>
            </form>
            <h3>{customerInfo}</h3>
            {showResults && (
                <>
                    <h4 className="text-3xl font-bold font-serif text-center">Tax: {gst}</h4>
                    <h4 className="text-3xl font-bold font-serif text-center">Total Price: {gst + total}</h4>
                </>
            )}
        </div>
    );
};

export default Items;
