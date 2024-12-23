'use client'; // This ensures the component is treated as a client component

import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-12-29T00:00:00+02:00'); // Event date in GMT+2
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const updateTimer = () => setTimeLeft(calculateTimeLeft());

    updateTimer(); // Initial calculation
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="container mx-auto">
      <div className='counter-card text-center mx-auto px-3 md:px-10 py-20 rounded-xl shadow-lg'>
      <h1 className='text-2xl md:text-5xl mb-2 md:mb-8'>PSC Hackathon</h1>
      {timeLeft ? (
        <div>
          <div className="counter-header grid grid-cols-4 gap-2 text-sm md:text-xl">
            <span>DAYS</span>
            <span>HOURS</span>
            <span>MINUTES</span>
            <span>SECONDS</span>
          </div>
          <div className='counter text-2xl md:text-5xl grid grid-cols-4 gap-2'>
            <span>{formatTime(timeLeft.days)}</span>
            <span>{formatTime(timeLeft.hours)}</span>
            <span>{formatTime(timeLeft.minutes)}</span>
            <span>{formatTime(timeLeft.seconds)}</span>
          </div>
          <span className='text-sm md:text-lg'>LEFT</span>
        </div>
      ) : (
        <span className='text-lg md:text-2xl'>The event has ended!</span>
      )}
    </div>
    </div>
  );
};

export default CountdownTimer;
