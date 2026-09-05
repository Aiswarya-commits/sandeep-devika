import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Flower2 } from 'lucide-react';

export const PetalShower = () => {
  const [blessingCount, setBlessingCount] = useState(142);

  // Background floating rose petals
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate gentle background floating petals
    const newPetals = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 95,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 7,
      size: 14 + Math.random() * 12,
      rotate: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  const triggerFlowerShower = () => {
    setBlessingCount((prev) => prev + 1);

    // Left cannon
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: ['#E8B4B8', '#D9777F', '#C9A84C', '#FFF4E0', '#B33951']
    });

    // Right cannon
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: ['#E8B4B8', '#D9777F', '#C9A84C', '#FFF4E0', '#B33951']
    });

    // Center gold glitter
    confetti({
      particleCount: 30,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#DFC06A', '#C9A84C', '#FFDF73']
    });
  };

  return (
    <>
      {/* Subtle Background Falling Rose Petals */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
        {petals.map((p) => (
          <div
            key={p.id}
            className="petal"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          >
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 30 30"
              fill="none"
              style={{ transform: `rotate(${p.rotate}deg)` }}
            >
              {/* Soft pinkish cream rose petal */}
              <path
                d="M15 2 C 24 2, 28 12, 24 22 C 20 28, 10 28, 6 22 C 2 12, 6 2, 15 2 Z"
                fill="rgba(235, 178, 178, 0.55)"
              />
              <path
                d="M15 5 C 20 5, 23 12, 20 18 C 17 22, 12 22, 10 18 C 7 12, 10 5, 15 5 Z"
                fill="rgba(255, 255, 255, 0.4)"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Floating Interactive "Shower Blessings" Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={triggerFlowerShower}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#C9A84C]/60 text-[#7A5C28] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Shower rose petals and blessings on Sandeep & Devika"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9777F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D9777F]"></span>
          </span>
          <Flower2 className="w-4 h-4 text-[#D9777F] group-hover:rotate-45 transition-transform" />
          <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-[#3D2817]">
            Shower Blessings
          </span>
          <span className="text-[0.68rem] px-2 py-0.5 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/30 text-[#9C7A3C] font-semibold">
            {blessingCount} 🌸
          </span>
        </button>
      </div>
    </>
  );
};
