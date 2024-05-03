import React, { useState } from 'react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [heartClicked, setheartCliked] = useState(false);


  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const heartClick = () => {
    setheartCliked(!heartClicked);
  }


  return (
    <div className='mb-2'>
      <div className="block md:hidden">
        <nav className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-red-500 text-lg font-bold">BookUsNow</span>
          </div>

          <div className="flex items-center">
            <div className="mr-4" onClick={toggleSearch}>
              <svg
                className="fill-current text-black h-6 w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="mr-4" onClick={heartClick}>
              {heartClicked ? (
                <svg
                  className="fill-current text-black h-6 w-6 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : (
                <svg
                  className="fill-current text-red-500 h-6 w-6 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              )}
            </div>

            <div>
              <svg
                className="fill-current text-black h-6 w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5"></circle>
                <path
                  d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
          </div>
        </nav>

        <div className={`px-4 ${isSearchOpen ? 'block' : 'hidden'}`}>
          <input
            className="appearance-none bg-white text-gray py-2 px-4 pr-8 leading-tight border border-gray-400 rounded w-full focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center mb-4">
            <svg className="fill-current text-gray-700 h-6 w-6 mr-2" fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9c-2.25 0-4-1.75-4-4s1.75-4 4-4 4 1.75 4 4-1.75 4-4 4z" />
            </svg>
            <div className="relative">
              <select className="appearance-none bg-white text-gray py-2 px-4 pr-8 leading-tight rounded">
                <option>Location 1</option>
                <option>Location 2</option>
                <option>Location 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 16.707l6-6a.999.999 0 0 0 0-1.414l-6-6A.999.999 0 0 0 7.88 5.293L12.586 10 7.88 14.707a.999.999 0 1 0 1.414 1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 flex flex-wrap justify-center">
          <a href="#" className="text-gray-700 m-2">Live show</a>
          <a href="#" className="text-gray-700 m-2">Stream</a>
          <a href="#" className="text-gray-700 m-2">Movies</a>
          <a href="#" className="text-gray-700 m-2">Events</a>
          <a href="#" className="text-gray-700 m-2">Sports</a>
          <a href="#" className="text-gray-700 m-2">Activities</a>
        </div>
      </div>

      <div className="hidden md:block">
        <nav className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-red-500 text-lg font-bold">BookUsNow</span>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <select className="appearance-none bg-black border border-gray-600 text-white py-2 pl-8 pr-8 rounded leading-tight focus:outline-none">
              <option value="">Select a city</option>
                <option value="Mumbai">Mumbai, India</option>
                <option value="Pune">Pune, India</option>
                <option value="Delhi">Delhi, India</option>
                <option value="Bangalore">Bangalore, India</option>
                <option value="Hyderabad">Hyderabad, India</option>
                <option value="Chennai">Chennai, India</option>
                <option value="Kolkata">Kolkata, India</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-white">
                <svg className="fill-current text-gray-700 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>

            <div className="relative ml-4">
              <input className="appearance-none  border border-gray-600 text-black py-2 pl-8 pr-8 rounded leading-tight " type="text" placeholder="Search..." />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-2">
                <svg className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                </svg>
              </div>
            </div>

          </div>
          <div className="flex items-center">
            <div className="mr-4" onClick={heartClick}>
              {heartClicked ? (
                <div className='flex'>
                  <svg
                    className="text-white h-6 w-6 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill='none'

                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                  </svg>
                  <p onClick={heartClick} className='cursor-pointer'>Favourite</p>
                </div>
              ) : (
                <div className='flex'>
                  <svg
                    className="fill-current text-red-500 h-6 w-6 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <p onClick={heartClick} className='cursor-pointer text-gray-600'>Favourite</p>
                </div>
              )}
            </div>
            <button className="bg-white text-gray border border-gray py-2 px-4 rounded">Sign In</button>


          </div>
        </nav>

        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="fill-current text-gray-700 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9c-2.25 0-4-1.75-4-4s1.75-4 4-4 4 1.75 4 4-1.75 4-4 4z" />
            </svg>
            <div className="relative mr-4">
              <select className="appearance-none bg-white text-gray py-2 px-4 pr-8 leading-tight">
                <option value="">Select a city</option>
                <option value="Mumbai">Mumbai, India</option>
                <option value="Pune">Pune, India</option>
                <option value="Delhi">Delhi, India</option>
                <option value="Bangalore">Bangalore, India</option>
                <option value="Hyderabad">Hyderabad, India</option>
                <option value="Chennai">Chennai, India</option>
                <option value="Kolkata">Kolkata, India</option>

              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 16.707l6-6a.999.999 0 0 0 0-1.414l-6-6A.999.999 0 0 0 7.88 5.293L12.586 10 7.88 14.707a.999.999 0 1 0 1.414 1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center hidden md:flex items-center">
            <a href="#" className="text-gray-700 mr-4">Live show</a>
            <a href="#" className="text-gray-700 mr-4">Stream</a>
            <a href="#" className="text-gray-700 mr-4">Movies</a>
            <a href="#" className="text-gray-700 mr-4">Events</a>
            <a href="#" className="text-gray-700 mr-4">Sports</a>
            <a href="#" className="text-gray-700">Activities</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
