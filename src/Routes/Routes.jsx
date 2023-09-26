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
import PrivateRoute from './PrivateRoute';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<PrivateRoute><Home></Home></PrivateRoute>
        },{
          path:"/signin",
          element:<Signin></Signin>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },{
          path:'/item',
          element:<PrivateRoute><Items></Items></PrivateRoute>
        },
        {
          path:'/bills',
          element:<PrivateRoute><Bills></Bills></PrivateRoute>
        },
        {
          path:'/customers',
          element:<PrivateRoute><Customers></Customers></PrivateRoute>
        },
        {
          path:'/allfood',
          element:<PrivateRoute><AllFood></AllFood></PrivateRoute>
        },
        {
          path:'/addfood',
          element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },{
          path:'/payment',
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        }
      ]
    ,
    },
    
  ]);
export default router;