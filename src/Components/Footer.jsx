import React from 'react'


function Footer() {
    return (
        <footer className=" text-white py-8 px-4 md:py-12 md:px-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                        <h1 className='text-4xl'>Ryder</h1>
                        <p className="text-sm leading-relaxed">
                            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                        </p>
                    </div>
                    
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Who We Are</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Important Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Income Tax Dept.</a></li>
                            <li><a href="#" className="hover:text-gray-300">Central Board of Excise & Customs</a></li>
                            <li><a href="#" className="hover:text-gray-300">Ministry of Corporate Affairs</a></li>
                            <li><a href="#" className="hover:text-gray-300">Employees Provident Fund</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">What We Do</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Income Tax</a></li>
                            <li><a href="#" className="hover:text-gray-300">FEMA, Foreign Collaboration</a></li>
                            <li><a href="#" className="hover:text-gray-300">Customs & Excise Related</a></li>
                            <li><a href="#" className="hover:text-gray-300">Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-white mt-8 py-4 text-black text-center text-sm">
                <p>Copyright © 2024 CA | Powered By Markletechandmedia.com</p>
            </div>
        </footer>
    )
}

export default Footer