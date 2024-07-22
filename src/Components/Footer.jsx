import React from 'react'

function Footer() {
    return (
        <footer className=" text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h1 className='text-3xl sm:text-4xl font-bold'>Ryder</h1>
                        <p className="text-sm leading-relaxed text-gray-300">
                            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Who We Are</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Home</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Blog</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Important Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Income Tax Dept.</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Central Board of Excise & Customs</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Ministry of Corporate Affairs</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Employees Provident Fund</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">What We Do</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Income Tax</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">FEMA, Foreign Collaboration</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Customs & Excise Related</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition-colors duration-200">Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-700 mt-8 py-4 text-center text-sm text-gray-300">
                <p>Copyright © {new Date().getFullYear()} CA | Powered By Markletechandmedia.com</p>
            </div>
        </footer>
    )
}

export default Footer