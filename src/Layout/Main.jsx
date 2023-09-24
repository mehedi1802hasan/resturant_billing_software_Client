import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open bg-pink-100">
                {/* Sidebar content here */}
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-pink-100">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full gap-4  bg-pink-300  font-bold">


                        <li><NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to="/bills" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Bills</NavLink></li>
                        <li><NavLink to="/item" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Add Card</NavLink></li>
                        <li><NavLink to="/addfood" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Add Food</NavLink></li>
                           <li><NavLink to="/allfood" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>All Food </NavLink></li>
                           <li><NavLink to="/signIn" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>SignIn</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;
