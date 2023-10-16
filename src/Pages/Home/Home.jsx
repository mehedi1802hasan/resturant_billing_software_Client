import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { BsCurrencyRupee } from 'react-icons/bs';

const Home = () => {
  const [menu,setMenu]=useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://resturant-server-gray.vercel.app/menu')
    // fetch('https://resturant-server-gray.vercel.app/menu')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setMenu(data)
    })
  },[]);
  const starter =menu.filter(item=>item.category === 'starter');
  const mainMeals =menu.filter(item=>item.category === 'mainMeals');
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
       <Tabs className=' px-3 lg:px-14 md:px-14 '>
    <TabList className=' pt-8 rounded grid grid-cols-2 md:grid-cols-7 gap-6'>
    <Tab  className='  border-b-2  border-pink-500 px-10 py-4 rounded-xl hover:bg-pink-400'>Started</Tab>
    <Tab  className='flex gap-3 border-b-2  border-pink-500 px-4 py-4 rounded-xl hover:bg-pink-400'><h3>Main </h3> <span>Meals</span></Tab>
      <Tab  className='  border-b-2  border-pink-500 px-10  py-4 rounded-xl hover:bg-pink-400'>Pizza</Tab>
      <Tab  className=' border-b-2 border-pink-500 px-10 py-4 rounded-xl  hover:bg-pink-400'>Drinks</Tab>
      <Tab  className=' border-b-2 border-pink-500 px-10 py-4 rounded-xl  hover:bg-pink-400 '>Dessert</Tab>
      <Tab  className=' border-b-2 border-pink-500 px-10 py-4 rounded-xl  hover:bg-pink-400 '>Soup</Tab>
    </TabList>


    <TabPanel className='mt-5'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8  gap-y-6 w-60 mx-auto md:w-full lg:full'>
        {
            starter.map(item=>
          <div key={item._id} className="card card-compact rounded-2xl  w-[270px] bg-base-100 shadow-md border  ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p className='flex items-center gap-1'>Price: <span className='flex items-center'><BsCurrencyRupee/>{item.price}</span></p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-5'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8  gap-y-6 w-60 mx-auto md:w-full lg:full'>
        {
            mainMeals.map(item=>
          <div key={item._id} className="card card-compact rounded-2xl  w-[270px] bg-base-100 shadow-md border  ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p className='flex items-center gap-1'>Price: <span className='flex items-center'><BsCurrencyRupee/>{item.price}</span></p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>

    <TabPanel className='mt-5'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8  gap-y-6  w-60 mx-auto md:w-full lg:full'>
        {
            pizza.map(item=>
          <div key={item._id} className="card card-compact rounded-2xl  w-[270px] bg-base-100 shadow-md border  ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p className='flex items-center gap-1'>Price: <span className='flex items-center'><BsCurrencyRupee/>{item.price}</span></p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-60 mx-auto md:w-full lg:full'>
        {
            drinks.map(item=>
             <div key={item._id} className="card card-compact  rounded-2xl  w-[270px] bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p className='flex items-center gap-1'>Price: <span className='flex items-center'><BsCurrencyRupee/>{item.price}</span></p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-60 mx-auto md:w-full lg:full'>
        {
            dessert.map(item=>
             <div key={item._id} className="card card-compact rounded-2xl  w-[270px] bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p className='flex items-center gap-1'>Price: <span className='flex items-center'><BsCurrencyRupee/>{item.price}</span></p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-60 mx-auto md:w-full lg:full'>
        {
            soup.map(item=>
          <div key={item._id} className="card card-compact  rounded-2xl  w-[270px] bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p className='flex items-center gap-1'>Price: <span className='flex items-center'><BsCurrencyRupee/>{item.price}</span></p>
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
