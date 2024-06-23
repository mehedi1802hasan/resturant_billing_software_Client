// import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BiMessageAltAdd } from 'react-icons/bi';
import { AiTwotoneSave } from 'react-icons/ai';
import { SiFoodpanda } from 'react-icons/si';
import { MdWorkHistory } from 'react-icons/md';
import { PiSignIn } from 'react-icons/pi';
// import { AuthContext } from '../Authentication/Provider';

const Main = () => {
    // const {user,LogOut}=useContext(AuthContext);
  
    return (
        <div>
            <div className="drawer lg:drawer-open bg-pink-100">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-centerr">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
              {
               <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4  gap-5 w-80 min-h-full  text-base-content bg-pink-300">
                        {/* Sidebar content here */}
                        <li><NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }><FaHome/> Home</NavLink></li>

                        <li><NavLink to="/addfood" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }><BiMessageAltAdd/> Add Food</NavLink></li>

                        <li><NavLink to="/allfood" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }><SiFoodpanda></SiFoodpanda> All Food </NavLink></li>

                        <li><NavLink to="/item" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }><AiTwotoneSave></AiTwotoneSave> AddToCard</NavLink></li>
                        <li><NavLink to="/bills" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }><MdWorkHistory></MdWorkHistory> Bills</NavLink></li>

                       
                    </ul>
                    

                </div>}
            </div>
        </div>
    );
};

export default Main;