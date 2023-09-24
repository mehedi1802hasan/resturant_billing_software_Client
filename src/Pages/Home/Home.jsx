import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [menu,setMenu]=useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/menu')
    .then(res=>res.json())
    .then(data=>setMenu(data))
  },[]);
  const pizza =menu.filter(item=>item.category === 'pizza');
  const drinks =menu.filter(item=>item.category === 'drinks');
  const dessert =menu.filter(item=>item.category === 'dessert');
  const soup =menu.filter(item=>item.category === 'soup');
  const handleAddToCard =(item)=>{
    toast('add food on the ADD to Card')
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    console.log(localStorage,item._id)
  }
    return (
    <div>
       <Tabs className='p-20  '>
    <TabList className=' p-10 rounded flex justify-center items-center  gap-9'>
      <Tab  className='  border-b-2  border-pink-500 px-10 py-4 rounded-xl hover:bg-pink-400'>Pizza</Tab>
      <Tab  className=' border-b-2 border-pink-500 px-10 py-4 rounded-xl  hover:bg-pink-400'>Drinks</Tab>
      <Tab  className=' border-b-2 border-pink-500 px-10 py-4 rounded-xl  hover:bg-pink-400'>Dessert</Tab>
      <Tab  className=' border-b-2 border-pink-500 px-10 py-4 rounded-xl  hover:bg-pink-400 '>Soup</Tab>
    </TabList>

    <TabPanel className='mt-5'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
        {
            pizza.map(item=>
          <div key={item._id} className="card card-compact rounded-2xl  w-[330px] bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p>Price: ${item.price}</p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
        {
            drinks.map(item=>
             <div key={item._id} className="card card-compact  rounded-2xl  w-[330px] bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p>Price: ${item.price}</p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
        {
            dessert.map(item=>
             <div key={item._id} className="card card-compact rounded-2xl  w-[330px] bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p>Price: ${item.price}</p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
        {
            soup.map(item=>
          <div key={item._id} className="card card-compact  rounded-2xl  w-[330px] bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p>Price: ${item.price}</p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Add-Card</button>
    </div>
   

  </div>
</div>
            )
        }
    </div>
    </TabPanel>
  </Tabs>
  <ToastContainer/>
    </div>
  );
};

export default Home;
