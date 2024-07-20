import React from 'react';
import team from '../assets/team.jpg'
const About = () => {
  return (
    <section className=" text-white min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-12 text-center">Your Journey, Our Passion</h2>
          
          <div className="bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-full h-full bg-gray-300">
              
                <img src={team} alt="" />
                <div className="h-full flex items-center justify-center">
                  
                </div>
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">About Our Cab Service</h3>
                <p className="text-gray-600 mb-6">
                  With over a decade of experience, we've been driving success by providing safe, reliable, and comfortable rides across the city. Our commitment to excellence ensures that every journey with us is more than just a ride – it's an experience.
                </p>
                <ul className="space-y-2 mb-8">
                  {['24/7 Availability', 'Professional Drivers', 'Clean Vehicles', 'Competitive Rates'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                  Book Your Ride Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;