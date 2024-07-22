import React from 'react';
import city from '../assets/city3.jpg'
import cover from '../assets/cover.jpg'
import yes from '../assets/yes.jpg'
const Mobility = () => {
  return (
    <div className=" bg-white max-w-7xl rounded-3xl mx-auto text-center mt-20 py-12">

      <h1 className=" text-black text-4xl font-bold font-serif mb-12 px-4">
        Mobility ecosystem driving communities forward
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        <StatCard
          imageSrc={city}
          number="250+"
          title="Cities covered"
          description="Across India"
        />
        <StatCard
          imageSrc={cover}
          number="55 Cr+"
          title="Yearly rides"
          description="Booked by our customers every year"
        />
        <StatCard
          imageSrc={yes}
          number="12 Cr+"
          title="Kilometers on RYDER"
          description="Distance covered by RYDER"
        />
      </div>
    </div>
  );
};

const StatCard = ({ imageSrc, number, title, description }) => (
  <div className="w-64 p-4  rounded-2xl">
    <div className="flex justify-center mb-4">
      <img src={imageSrc} alt={title} className="w-52 h-40 object-contain rounded-2xl" />
    </div>
    <h2 className="text-3xl text-black font-bold mb-2">{number}</h2>
    <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Mobility;