'use client'; // This ensures the component is treated as a client component

import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-12-28T23:59:00+02:00'); // Event date in GMT+2
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
    <div className="container">
      <div className='counter-card text-center mx-auto px-10 py-20 rounded-xl shadow-lg'>
      <h1 className='text-4xl mb-5'>PSC Hackathon</h1>
      {timeLeft ? (
        <div className='text-5xl'>
          {formatTime(timeLeft.days)}:
          {formatTime(timeLeft.hours)}:
          {formatTime(timeLeft.minutes)}:
          {formatTime(timeLeft.seconds)}
        </div>
      ) : (
        <span>The event has started!</span>
      )}
    </div>
    </div>
  );
};

export default CountdownTimer;
