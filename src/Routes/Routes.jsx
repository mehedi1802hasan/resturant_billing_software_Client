// import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
// import Signin from '../Pages/SinginUp/Signin';
// import SignUp from '../Pages/SinginUp/signUp';
import Items from '../Pages/Home/Items';
import Bills from '../Pages/Home/Bills';
import Customers from '../Pages/Home/Customers';
import AllFood from '../Pages/Home/AllFood';
import AddFood from '../Pages/Home/AddFood';
// import PrivateRoute from './PrivateRoute';
import Error from '../SharedComponent/Error';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        // {
        //   path:"/signup",
        //   element:<SignUp></SignUp>
        // },
        {
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
          path:'*',
          element:<Error></Error>
        }
      ]
    ,
    },
    
  ]);
export default router;