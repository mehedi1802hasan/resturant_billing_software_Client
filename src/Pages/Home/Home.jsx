import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    console.log(localStorage,item._id)
  }
    return (
    <div>
       <Tabs className='p-20 '>
    <TabList className=' flex gap-14 justify-center items-center '>
      <Tab  className='border-2  border-black px-10 py-4 rounded-xl hover:bg-yellow-500'>Pizza</Tab>
      <Tab  className='border-2 border-black px-10 py-4 rounded-xl  hover:bg-yellow-500'>Drinks</Tab>
      <Tab  className='border-2 border-black px-10 py-4 rounded-xl  hover:bg-yellow-500'>Dessert</Tab>
      <Tab  className='border-2 border-black px-10 py-4 rounded-xl  hover:bg-yellow-500 '>Soup</Tab>
    </TabList>

    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 '>
        {
            pizza.map(item=>
          <div key={item._id} className="card card-compact  w-72 bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p>Price: ${item.price}</p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-24 '>
        {
            drinks.map(item=>
             <div key={item._id} className="card card-compact  w-72 bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p>Price: ${item.price}</p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-24 '>
        {
            dessert.map(item=>
             <div key={item._id} className="card card-compact  w-72 bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p>Price: ${item.price}</p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
    <TabPanel className='mt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 '>
        {
            soup.map(item=>
          <div key={item._id} className="card card-compact  w-72 bg-base-100 shadow-xl ">
  <figure><img className='h-52 w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
  
    <div className="card-actions flex items-center justify-end">
    <p>Price: ${item.price}</p>
      <button onClick={()=>handleAddToCard(item)} className="btn btn-primary">Add-Card</button>
    </div>
  </div>
</div>
            )
        }
    </div>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Home;
