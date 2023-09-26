import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/Provider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
   
    if(loading){
        return(
            <div className="flex items-center justify-center h-screen">
     <h3>Loading....</h3>
      </div>
        )
    }
    if(user){
  return children
  
    }
  
       return <Navigate to='/signin' state={{from: location}} replace/>

};

export default PrivateRoute;