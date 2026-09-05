import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export const Countdown = () => {
  // Target: September 13, 2026 10:30:00 AM IST (UTC+5:30)
  const targetDate = new Date('2026-09-13T10:30:00+05:30').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isComplete: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-10 px-4">
      <div className="relative rounded-3xl p-6 sm:p-8 text-center bg-gradient-to-b from-[#FFFFFF] via-[#FAF6EF] to-[#FDF2E9] border border-[#C9A84C]/40 shadow-xl overflow-hidden">
        {/* Subtle decorative background stars */}
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#DFC06A]/15 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -left-6 -top-6 w-24 h-24 bg-[#D9777F]/10 rounded-full blur-xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/40 text-[#9C7A3C] text-xs uppercase tracking-widest font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A84C] animate-pulse" />
          <span>The Blessed Day Awaits</span>
        </div>

        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#3D2817] mb-1">
          Counting Down to the Muhurtham
        </h3>
        <p className="font-cormorant italic text-sm text-[#7A624E] mb-6">
          Sunday, 13th September 2026 • 1202 Chingam 28
        </p>

        {/* Counter Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
          {timeUnits.map((unit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#C9A84C]/35 shadow-md transform transition hover:-translate-y-1 duration-300"
            >
              <div className="font-cinzel text-2xl sm:text-4xl font-bold text-[#3D2817] leading-none mb-1">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="font-montserrat text-[0.62rem] sm:text-xs tracking-wider uppercase text-[#9C7A3C] font-semibold">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#7A624E] font-cormorant italic text-center">
          <Clock className="w-3.5 h-3.5 text-[#9C7A3C]" />
          <span>Muhoortham between 10:30 AM and 11:30 AM</span>
        </div>
      </div>
    </div>
  );
};
