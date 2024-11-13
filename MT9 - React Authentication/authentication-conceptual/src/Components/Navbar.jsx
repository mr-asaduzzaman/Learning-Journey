import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const Links = (
        <>
            <NavLink
                className="btn btn-sm btn-outline rounded-full text-base font-semibold hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white transition-all duration-300"
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className="btn btn-sm btn-outline rounded-full text-base font-semibold hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white transition-all duration-300"
                to="/login"
            >
                Login
            </NavLink>
            <NavLink
                className="btn btn-sm btn-outline rounded-full text-base font-semibold hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white transition-all duration-300"
                to="/signUp"
            >
                Sign Up
            </NavLink>
            <NavLink
                className="btn btn-sm btn-outline rounded-full text-base font-semibold hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white transition-all duration-300"
                to="/profile"
            >
                Profile
            </NavLink>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-blue-100 to-blue-200 p-4 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg"
                    >
                        {Links}
                    </ul>
                </div>
                <a className="text-2xl font-bold text-indigo-600">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">{Links}</ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Navbar;
