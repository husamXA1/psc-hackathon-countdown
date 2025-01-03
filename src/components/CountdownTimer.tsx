"use client"; // This ensures the component is treated as a client component

import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-29T12:00:00+02:00"); // Event date in GMT+2
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
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="card text-center my-5 mx-auto px-3 md:px-10 py-10 rounded-xl shadow-lg">
      <h1 className="text-2xl md:text-5xl mb-2 md:mb-8">PSC Hackathon</h1>
      <div>
        <h2 className="text-lg md:text-2xl mb-3">Time Left</h2>
        <div className="counter-header grid grid-cols-4 gap-2 text-sm md:text-xl">
          <span>DAYS</span>
          <span>HOURS</span>
          <span>MINUTES</span>
          <span>SECONDS</span>
        </div>
        <div
          className={`counter text-2xl md:text-5xl grid grid-cols-4 gap-2 ${
            timeLeft ? "" : "end-counter"
          }`}
        >
          {timeLeft ? (
            <>
              <span>{formatTime(timeLeft.days)}</span>
              <span>{formatTime(timeLeft.hours)}</span>
              <span>{formatTime(timeLeft.minutes)}</span>
              <span>{formatTime(timeLeft.seconds)}</span>
            </>
          ) : (
            <>
              <span>E</span>
              <span>N</span>
              <span>D</span>
              <span>!</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
