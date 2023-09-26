import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Signin from '../Pages/SinginUp/Signin';
import SignUp from '../Pages/SinginUp/signUp';
import Items from '../Pages/Home/Items';
import Bills from '../Pages/Home/Bills';
import Customers from '../Pages/Home/Customers';
import AllFood from '../Pages/Home/AllFood';
import AddFood from '../Pages/Home/AddFood';
import Payment from '../Pages/Payment/Payment';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:"/signin",
          element:<Signin></Signin>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },{
          path:'/item',
          element:<Items></Items>
        },
        {
          path:'/bills',
          element:<Bills></Bills>
        },
        {
          path:'/customers',
          element:<Customers></Customers>
        },
        {
          path:'/allfood',
          element:<AllFood></AllFood>
        },
        {
          path:'/addfood',
          element:<AddFood></AddFood>
        },{
          path:'/payment',
          element:<Payment></Payment>
        }
      ]
    ,
    },
    
  ]);
export default router;