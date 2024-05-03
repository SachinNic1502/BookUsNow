import React, { useEffect, useState } from 'react';

function UpcomingEvent() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch the upcoming event data
        fetchEventList();
    }, []);

    const fetchEventList = async () => {
        try {
            const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming');
            if (!response.ok) {
                throw new Error('Failed to fetch upcoming events');
            }
            const data = await response.json();
            if (data && data.events && data.events.length > 0) {
                setEvents(data.events);
            } else {
                console.error('Upcoming event data is missing or malformed:', data);
            }
        } catch (error) {
            console.error('Error fetching upcoming events:', error);
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
                <div key={index} className="rounded overflow-hidden shadow-lg relative">
                    <a href="#">
                        <div className="relative">
                            <img
                                className="w-full h-full object-cover object-center"
                                src={event.imgUrl}
                                alt="Event"
                                onError={(e) => {
                                    console.error('Error loading image:', e);
                                    console.log('Target element:', e.target);
                                    console.log('Event object:', e);
                                    e.target.src = 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
                                }}
                            />
                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            <a href="#!">
                                <div className="absolute bottom-0 left-0 w-full bg-black-600 px-4 py-2 text-white text-sm">
                                    {new Date(event.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </div>
                            </a>
                        </div>
                    </a>
                    <div className="px-6 py-4">
                        <a href="#" className="text-gray-600 ftext-base inline-block text-gray">{event.eventName}</a>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-600 text-xs">
                            {/*Location */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                            </svg>
                            {event.cityName}
                        </p>
                        <p className="text-gray-600 text-xs">
                            {event.weather} | {(event.distanceKm / 1000).toFixed(2)} km
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UpcomingEvent;
