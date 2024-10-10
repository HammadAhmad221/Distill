import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const countdown = () => {
      const countDate = new Date('Dec 31, 2024 00:00:00').getTime();
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(gap / day);
      const hours = Math.floor((gap % day) / hour);
      const minutes = Math.floor((gap % hour) / minute);
      const seconds = Math.floor((gap % minute) / second);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(countdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        {/* Logo (Optional) */}
        <div className="w-full flex items-center justify-center gap-2">
            <img src="/Clip.svg" alt="" className='w-20 h-20'/>
            <div className="text-4xl font-bold whitespace-nowrap">
              Distill Audio
            </div>
          </div>

        {/* Coming Soon Text */}
        <h1 className="text-5xl font-bold mb-4 text-white">Exciting Features Coming Soon!</h1>
        <p className="text-lg text-gray-400 mb-6">
          We're working hard to bring you the best experience. Stay tuned for upcoming features!
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-4 text-4xl font-semibold mb-8">
          <div>
            <span className="text-white">{timeLeft.days}</span>
            <span className="text-sm block text-gray-400">Days</span>
          </div>
          <div>
            <span className="text-white">{timeLeft.hours}</span>
            <span className="text-sm block text-gray-400">Hours</span>
          </div>
          <div>
            <span className="text-white">{timeLeft.minutes}</span>
            <span className="text-sm block text-gray-400">Minutes</span>
          </div>
          <div>
            <span className="text-white">{timeLeft.seconds}</span>
            <span className="text-sm block text-gray-400">Seconds</span>
          </div>
        </div>

        {/* Notify Me Form */}
        <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            className="px-4 py-2 rounded-md w-64 bg-gray-800 text-white"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-[#3F3EED] hover:bg-[#3432d1] text-white font-semibold"
          >
            Notify Me
          </button>
        </form>

        {/* Features List */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">What's Coming:</h2>
          <ul className="space-y-2">
            <li>✨ Feature 1: A brand new dashboard experience.</li>
            <li>🚀 Feature 2: Faster performance with our new system.</li>
            <li>🔒 Feature 3: Enhanced security for peace of mind.</li>
            <li>📱 Feature 4: Mobile-friendly access across devices.</li>
          </ul>
        </div>

        {/* Social Media Links (Optional) */}
        <div className="mt-8 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
