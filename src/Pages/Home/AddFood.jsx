import React from 'react';
import Swal from 'sweetalert2';

const AddFood = () => {
    
    // const {user}=useContext(AuthContext)
      const handleAddFood=event=>{
          event.preventDefault();
          const form=event.target;
          const name=form.name.value;
          const image=form.imgUrl.value;
          const price=form.price.value;
          const quantity=form.quantity.value;
          const category=form.category.value;
          const recipe=form.recipe.value;
          const addFood={
            name,image,price,quantity,category,recipe
          }
          console.log(addFood)
          fetch('https://resturant-server-o7tc2ddyw-mehedi1802hasan.vercel.app/menu',{
              method:"POST",
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(addFood)
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
              if(data.insertedId){
                Swal.fire({
                  title: 'Great!',
                  text: 'Food Item Successfully Posted ',
                  icon: 'success',
                  confirmButtonText: 'Done'
                })
              }
          })
      }
      return (
        <div className=''>
            <h4 className='text-center font-serif text-4xl mt-12'>Add Food </h4>
        <form onSubmit={handleAddFood} className=" card-body">
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className="form-control">
         <label className="label">
              <span className="label-text">Food-Name</span>
            </label>
            <input type="text" name='name' placeholder="Enter your Product name" className="input input-bordered   p-8 rounded-2xl" required/>
          </div>
         
          
          <div className="form-control">
         <label className="label">
              <span className="label-text">ImageURL</span>
            </label>
            <input type="text" name="imgUrl" placeholder="Enter product image url" className="input input-bordered  p-8 rounded-2xl"required />
          </div>
          <div className="form-control">
         <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number" name='price' placeholder="enter product price" className="input input-bordered  p-8 rounded-2xl" defaultValue="" required/>
          </div>
          
          <div className="form-control">
         <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="number" placeholder='enter product quantity' name='quantity'  className="input input-bordered  p-8 rounded-2xl" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name='category' className=' p-5 rounded-2xl '>
            <option value="starter">starter</option>
        <option value="mainMeals">main-mill</option>
    <option value="pizza">pizza</option>
    <option value="drinks">drinks</option>
    <option value="dessert">dessert</option>
    <option value="soup">soup</option>
   
   
  </select>
           
          </div>
          
          <div className="form-control">
         <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input type="text" name="recipe" placeholder="Enter product description" className="input input-bordered  p-8 rounded-2xl" />
          </div>
          
          </div>
          <div className="mt-6 form-control">
            <button className="btn btn-primary">Add Food</button>
          </div>
        </form>
      </div>
    
      );
  };
  

export default AddFood;