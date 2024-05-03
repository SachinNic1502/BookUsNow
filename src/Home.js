// Home.js
import React from 'react';
import Recommended from './Recommended';
import UpcomingEvent from './UpcomingEvent'; 

const Home = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          zIndex: '-1',
          width: '100%',
          height: '500px', 
        }}
      />

      <div className="relative z-10 text-white h-full flex flex-col justify-center items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-bold px-4 sm:px-10 md:px-14 pt-4 sm:pt-10 justify-center items-center text-center">
          Discover existing events happening near you - stay tuned for updates
        </h2>

        {/* Description */}
        <p className="text-lg md:text-base px-4 sm:px-10 md:px-14 pt-4 sm:pt-10 text-center">
          Discover existing events happening near you! Stay tuned for updates as we bring you the latest and most exciting happenings in your area. Whether it's concerts, festivals, workshops, or more, we've got you covered. Don't miss out on the fun!
        </p>

        {/* Recommended Events */}
        <div className="mb-10 sm:mb-20">
          <div className="flex justify-between p-2">
            <div className="flex flex-col">
              <p>
                <span className="text-white">Recommended show</span>
                <svg viewBox="0 0 24 24" width={'70px'} height={'70px'} fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-white">
                  <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-white underline">See all</p>
            </div>
          </div>
          <Recommended />
        </div>

        {/* Upcoming Events */}
        <div className="mb-10 sm:mb-20">
          <div className="flex justify-between p-2">
            <div className="flex flex-col">
              <p>
                <span className="text-black">Upcoming events</span>
                <svg viewBox="0 0 24 24" width={'70px'} height={'70px'} fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-white">
                  <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
            </div>
          </div>
          <UpcomingEvent />
        </div>
      </div>
    </div>
  );
};

export default Home;
