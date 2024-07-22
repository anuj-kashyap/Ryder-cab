import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Login from './Login';
import Signup from './SignUp';  // Import the Signup component

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);  // New state for signup modal
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setIsMenuOpen(false);
  };

  const toggleSignupModal = () => {  // New function to toggle signup modal
    setShowSignupModal(!showSignupModal);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">RYDER</span>
            
            <div className="hidden md:flex items-center gap-10 text-lg">
              <Link to='/' className="hover:text-gray-300">Home</Link>
              <Link to='/Booking' className="hover:text-gray-300">Booking</Link>
              <Link to="/FareEstimator" className="hover:text-gray-300">Fare Estimator</Link>
              <Link to="Support" className="hover:text-gray-300">Support</Link>
              <Link to="/About_us" className="hover:text-gray-300 flex items-center">
                About
                <span className="ml-1">▼</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center mr-8 space-x-4">
              <button className="hover:text-gray-300">EN</button>
              <button className="hover:text-gray-300">Help</button>
              <button className="hover:text-gray-300" onClick={toggleLoginModal}>Log in</button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200" onClick={toggleSignupModal}>
                Sign up
              </button>
            </div>

            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <Link to='/' className="block py-2 hover:text-gray-300" onClick={closeMenu}>Home</Link>
              <Link to='/Booking' className="block py-2 hover:text-gray-300" onClick={closeMenu}>Booking</Link>
              <Link to="/FareEstimator" className="block py-2 hover:text-gray-300" onClick={closeMenu}>Fare Estimator</Link>
              <Link to="Support" className="block py-2 hover:text-gray-300" onClick={closeMenu}>Support</Link>
              <Link to="/About_us" className="block py-2 hover:text-gray-300" onClick={closeMenu}>About</Link>
              <button className="block py-2 hover:text-gray-300 w-full text-left" onClick={closeMenu}>EN</button>
              <button className="block py-2 hover:text-gray-300 w-full text-left" onClick={closeMenu}>Help</button>
              <button className="block py-2 hover:text-gray-300 w-full text-left" onClick={toggleLoginModal}>Log in</button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 mt-2 w-full" onClick={toggleSignupModal}>
                Sign up
              </button>
            </div>
          )}
        </div>
      </nav>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
            <button 
              className="float-right text-gray-700 hover:text-gray-900"
              onClick={toggleLoginModal}
            >
              ✕
            </button>
            <Login />
          </div>
        </div>
      )}

      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
            <button 
              className="float-right text-gray-700 hover:text-gray-900"
              onClick={toggleSignupModal}
            >
              ✕
            </button>
            <Signup />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;