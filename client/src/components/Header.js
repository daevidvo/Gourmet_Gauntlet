import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

function Header() {
    const navigationItems = [
        { title: 'About Us', link: '/About-Us' },
    ];

    const location = useLocation();

    return (
        <header className="flex items-center justify-center px-4 py-2 bg-gray-600 h-16">
            <div className="flex items-center">
                <img src={myIcon} alt="Company Icon" className="my-icon w-20 h-18" />
            </div>
            <nav>
                <ul className="nav-bar flex ">
                    {navigationItems.map((item, index) => (
                        <li key={index} className={location.pathname === item.link ? 'active' : ''}>
                            <Link
                                to={item.link}
                                className="mx-3 text-white font-semibold py-5">
                                <div className="px-5 hover:bg-gray-200 py-4 hover:opacity-75 hover:text-black rounded transition duration-200 transform hover:scale-110">
                                    {item.title}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex">
                    {Auth.loggedIn() ? (
                        <>
                            <li className="mx-3 text-white font-semibold py-5">
                                <div className="px-5 hover:bg-gray-200 py-4 hover:opacity-75 hover:text-black rounded transition duration-200 transform hover:scale-110">
                                    <Link to="/Home">Home</Link>
                                </div>
                            </li>
                        </>
                    ) : (
                        <>

                            <li className="mx-3 text-white font-semibold py-5">
                                <div className="px-5 hover:bg-gray-200 py-4 hover:opacity-75 hover:text-black rounded transition duration-200 transform hover:scale-110">
                                    <Link to="/Login">Login</Link>
                                </div>
                            </li>
                            <li className="mx-3 text-white font-semibold py-5">
                                <div className="px-5 hover:bg-gray-200 py-4 hover:opacity-75 hover:text-black rounded transition duration-200 transform hover:scale-110">
                                    <Link to="/Signup">Signup</Link>
                                </div>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

