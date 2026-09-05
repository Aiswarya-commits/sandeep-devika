import React from 'react';

export const GaneshaHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4 text-center relative z-10 select-none">
      {/* Golden Aura Glow */}
      <div className="absolute w-36 h-36 rounded-full bg-[#DFC06A]/20 blur-2xl pointer-events-none -top-4" />

      {/* Ganesha Emblem Container matching the physical card's circular motif */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-0.5 bg-gradient-to-tr from-[#9C7A3C] via-[#DFC06A] to-[#FAF6EF] shadow-md mb-3 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-[#FAF6EF] flex items-center justify-center border border-[#C9A84C]/50 p-2 shadow-inner">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-[#9C7A3C]">
            {/* Sacred Vinayaka / Ganesha Minimal Line Art */}
            <circle cx="50" cy="50" r="46" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="50" cy="50" r="41" stroke="#DFC06A" strokeWidth="1" />
            {/* Trunk and Ears */}
            <path
              d="M38 32 C32 28, 25 35, 26 44 C27 50, 34 53, 38 48 C42 43, 44 32, 50 30 C56 32, 58 43, 62 48 C66 53, 73 50, 74 44 C75 35, 68 28, 62 32"
              stroke="#8B6914"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Forehead Tilak */}
            <path d="M47 22 L53 22 M50 18 L50 28" stroke="#D9777F" strokeWidth="2.2" strokeLinecap="round" />
            {/* Modak & Trunk Swirl */}
            <path
              d="M50 34 C50 48, 45 58, 48 68 C50 75, 58 78, 63 73 C67 69, 64 64, 60 65"
              stroke="#8B6914"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Lotus Petals Base */}
            <path
              d="M32 84 C38 78, 45 80, 50 85 C55 80, 62 78, 68 84 C62 88, 38 88, 32 84 Z"
              fill="#DFC06A"
              opacity="0.8"
            />
            {/* Modak */}
            <circle cx="65" cy="55" r="3.5" fill="#D9777F" />
          </svg>
        </div>
      </div>

      {/* Auspicious Shloka */}
      <h3 className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#9C7A3C] uppercase font-bold">
        ॥ श्री गणेशाय नमः ॥
      </h3>
      <p className="font-cormorant italic text-xs sm:text-sm text-[#7A624E] max-w-sm mt-1 leading-relaxed">
        "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"
      </p>
    </div>
  );
};
