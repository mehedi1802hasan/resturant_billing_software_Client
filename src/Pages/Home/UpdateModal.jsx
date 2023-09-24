import React from 'react';
import Swal from 'sweetalert2';
import { FaRegEdit } from 'react-icons/fa';

const UpdateModal = ({ item }) => {
  const handleSubmit = (e) => {
    // e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const image = form.image.value;
    console.log(name, price, quantity, image);
    const addFood={
        name,price,quantity,image
        }
    fetch(`http://localhost:5000/menu/${item._id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addFood)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
            title: 'Well-done!!',
            text: 'Updated  successfully ',
            icon: 'success',
            confirmButtonText: 'Okay'
          }) 
      }
    })


  };

  const closeModal = () => {
    const modal = document.getElementById(`my_modal_4-${item._id}`);
    modal.close(); // Close the dialog
  };

  return (
    <div>
       <button
        className=" text-lg text-green-500"
        onClick={() => document.getElementById(`my_modal_4-${item._id}`).showModal()}
      >
       <FaRegEdit/>
      </button>
      <dialog id={`my_modal_4-${item._id}`} className="modal">
        <div className="modal-box">
        <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
             X
            </button>
          <form onSubmit={handleSubmit} method="dialog">
           
           <div className='md:flex lg:flex gap-4'>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Product name"
                className="input input-bordered rounded-2xl"
                defaultValue={item.name}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter your food Price"
                className="input input-bordered rounded-2xl"
                defaultValue={item.price}
              />
            </div>
           </div>
           <div className='md:flex lg:flex gap-4 '>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter your Product name"
                className="input input-bordered rounded-2xl"
                defaultValue={item.quantity}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter your Product name"
                className="input input-bordered rounded-2xl"
                defaultValue={item.image}
              />
            </div>
           </div>
            <div className="form-control hidden">
              <label className="label">
                <span className="label-text">Id</span>
              </label>
              <input
                type="text"
                name="id"
                placeholder="Enter your id name"
                className="input input-bordered rounded-2xl"
                defaultValue={item._id}
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="btn btn-outline btn-secondary my-4">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;
