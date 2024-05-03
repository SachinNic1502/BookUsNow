import React, { useEffect, useState } from 'react';
import './Recommended.css';

function Recommended() {
  const [events, setEvents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ%3D%3D&type=reco')
      .then(res => res.json())
      .then(data => {
        if (data && data.events) {
          setEvents(data.events);
        } else {
          console.error('Events data is missing or malformed:', data);
        }
      })
      .catch(error => console.error('Error fetching events:', error));

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalSlides = Math.ceil(events.length / (isMobileView ? 1 : 3));

  const goToPreviousSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
  };

  const renderEventsInSlide = () => {
    const startIndex = currentSlide * (isMobileView ? 1 : 3);
    const endIndex = Math.min(startIndex + (isMobileView ? 1 : 3), events.length);

    return events.slice(startIndex, endIndex).map((event, index) => (
      <div key={index} className={`event-card flex items-center justify-center ${isMobileView ? 'w-full' : 'w-1/4'}`}>
        <div className="max-w-xs w-full rounded overflow-hidden shadow-lg bg-white ml-5">
          <img
            className="w-full h-64 object-cover"
            src={event.imgUrl || 'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
            }}
            alt={event.title}
          />
          <div className="relative">
            <div className="flex justify-end">
              <p className="text-gray-600 mr-4 md:mr-14 text-lg md:text-xl">Make Agree</p>
              <p className="text-gray-600 m-auto text-sm">
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                {event.cityName}
              </p>
              <p className="text-gray-600 text-xs">
                {event.weather} | {(event.distanceKm / 1000).toFixed(2)} km
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="recommended-slider">
      <div className="slider-wrapper flex flex-wrap justify-center ">
        {renderEventsInSlide()}
      </div>
      <button className="prev-btn" onClick={goToPreviousSlide}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000" className="w-6 h-6">
          <path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z"/>
        </svg>
      </button>
      <button className="next-btn" onClick={goToNextSlide}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000" className="w-6 h-6">
          <path d="M8.59 16.58L13.17 12l-4.58-4.59L10 6l6 6-6 6-1.41-1.42z"/>
        </svg>
      </button>
    </div>
  );
}

export default Recommended;
