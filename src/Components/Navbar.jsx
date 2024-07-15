import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <span className="text-3xl font-bold">RYDER</span>
        <div className="pl-24 space-x-16">
          <Link to='/' className="hover:text-gray-300">Home</Link>
          <Link to='/Booking' className="hover:text-gray-300">Booking</Link>
          <a href="#" className="hover:text-gray-300">Dashboard</a>
          <a href="#" className="hover:text-gray-300">Drive-Info</a>
          <a href="#" className="hover:text-gray-300">Fare Estimator</a>
          <a href="#" className="hover:text-gray-300">Support</a>
          <a href="#" className="hover:text-gray-300">
            About
            <span className="ml-1">▼</span>
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:text-gray-300">EN</button>
        <button className="hover:text-gray-300">Help</button>
        <button className="hover:text-gray-300">Log in</button>
        <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;