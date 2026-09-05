import React from 'react';

// Delicate watercolor floral garland & corner roses SVG inspired by the physical card
export const FloralTopRight = ({ className = "" }) => (
  <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-44 sm:w-64 sm:h-64 opacity-90">
      <defs>
        <linearGradient id="roseCream1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FBF2E6" />
          <stop offset="100%" stopColor="#EAD3B5" />
        </linearGradient>
        <linearGradient id="leafGreen1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A9A86" />
          <stop offset="100%" stopColor="#556B4E" />
        </linearGradient>
        <linearGradient id="goldStem1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFC06A" />
          <stop offset="100%" stopColor="#9C7A3C" />
        </linearGradient>
      </defs>

      {/* Eucalyptus Stems & Foliage */}
      <path d="M250 10 C 200 40, 160 90, 140 160" stroke="url(#goldStem1)" strokeWidth="1.8" fill="none" />
      <path d="M260 45 C 210 75, 175 120, 165 195" stroke="url(#leafGreen1)" strokeWidth="1.5" fill="none" />

      {/* Eucalyptus Leaves */}
      <ellipse cx="205" cy="55" rx="14" ry="8" transform="rotate(-30 205 55)" fill="url(#leafGreen1)" opacity="0.85" />
      <ellipse cx="175" cy="90" rx="16" ry="10" transform="rotate(-40 175 90)" fill="url(#leafGreen1)" opacity="0.8" />
      <ellipse cx="150" cy="135" rx="15" ry="9" transform="rotate(-55 150 135)" fill="url(#leafGreen1)" opacity="0.75" />
      <ellipse cx="225" cy="85" rx="13" ry="8" transform="rotate(25 225 85)" fill="url(#leafGreen1)" opacity="0.85" />
      <ellipse cx="190" cy="130" rx="14" ry="9" transform="rotate(20 190 130)" fill="url(#leafGreen1)" opacity="0.75" />

      {/* Golden accent sprigs */}
      <circle cx="160" cy="70" r="3" fill="#C9A84C" />
      <circle cx="145" cy="110" r="2.5" fill="#C9A84C" />
      <circle cx="130" cy="150" r="3" fill="#C9A84C" />

      {/* Blooming White/Cream English Rose 1 */}
      <g transform="translate(195, 30)">
        <circle cx="0" cy="0" r="28" fill="url(#roseCream1)" filter="drop-shadow(0 4px 10px rgba(90,70,50,0.12))" />
        <path d="M-18 -5 C-12 -20, 12 -20, 18 -5 C12 10, -12 10, -18 -5 Z" fill="#F8EADB" />
        <path d="M-12 0 C-6 -12, 6 -12, 12 0 C6 8, -6 8, -12 0 Z" fill="#ECD5BE" />
        <path d="M-6 2 C-3 -5, 3 -5, 6 2 C3 5, -3 5, -6 2 Z" fill="#DDBB9E" />
      </g>

      {/* Secondary Rose 2 */}
      <g transform="translate(150, 85)">
        <circle cx="0" cy="0" r="22" fill="url(#roseCream1)" filter="drop-shadow(0 3px 8px rgba(90,70,50,0.1))" />
        <path d="M-14 -4 C-8 -15, 8 -15, 14 -4 C8 8, -8 8, -14 -4 Z" fill="#F8EADB" />
        <path d="M-8 0 C-4 -8, 4 -8, 8 0 C4 6, -4 6, -8 0 Z" fill="#ECD5BE" />
      </g>

      {/* Small Rosebud 3 */}
      <g transform="translate(230, 120)">
        <circle cx="0" cy="0" r="15" fill="url(#roseCream1)" />
        <path d="M-9 -2 C-5 -9, 5 -9, 9 -2 C5 5, -5 5, -9 -2 Z" fill="#ECD5BE" />
      </g>
    </svg>
  </div>
);

export const FloralBottomLeft = ({ className = "" }) => (
  <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-44 sm:w-64 sm:h-64 opacity-90 rotate-180">
      <defs>
        <linearGradient id="roseCream2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FBF2E6" />
          <stop offset="100%" stopColor="#EAD3B5" />
        </linearGradient>
        <linearGradient id="leafGreen2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A9A86" />
          <stop offset="100%" stopColor="#556B4E" />
        </linearGradient>
      </defs>

      <path d="M250 10 C 200 40, 160 90, 140 160" stroke="#C9A84C" strokeWidth="1.8" fill="none" />
      <path d="M260 45 C 210 75, 175 120, 165 195" stroke="url(#leafGreen2)" strokeWidth="1.5" fill="none" />

      <ellipse cx="205" cy="55" rx="14" ry="8" transform="rotate(-30 205 55)" fill="url(#leafGreen2)" opacity="0.85" />
      <ellipse cx="175" cy="90" rx="16" ry="10" transform="rotate(-40 175 90)" fill="url(#leafGreen2)" opacity="0.8" />
      <ellipse cx="150" cy="135" rx="15" ry="9" transform="rotate(-55 150 135)" fill="url(#leafGreen2)" opacity="0.75" />

      <circle cx="160" cy="70" r="3" fill="#C9A84C" />
      <circle cx="145" cy="110" r="2.5" fill="#C9A84C" />

      <g transform="translate(195, 30)">
        <circle cx="0" cy="0" r="26" fill="url(#roseCream2)" filter="drop-shadow(0 4px 10px rgba(90,70,50,0.12))" />
        <path d="M-16 -4 C-10 -18, 10 -18, 16 -4 C10 8, -10 8, -16 -4 Z" fill="#F8EADB" />
        <path d="M-10 0 C-5 -10, 5 -10, 10 0 C5 6, -5 6, -10 0 Z" fill="#ECD5BE" />
      </g>

      <g transform="translate(150, 85)">
        <circle cx="0" cy="0" r="20" fill="url(#roseCream2)" />
        <path d="M-12 -3 C-7 -12, 7 -12, 12 -3 C7 6, -7 6, -12 -3 Z" fill="#ECD5BE" />
      </g>
    </svg>
  </div>
);

export const GoldDivider = ({ title, icon }) => (
  <div className="flex items-center justify-center gap-3 my-4 w-full max-w-md mx-auto">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-[#DFC06A]" />
    {icon ? (
      <span className="text-[#C9A84C]">{icon}</span>
    ) : (
      <span className="text-xs tracking-widest uppercase font-cinzel text-[#9C7A3C] font-semibold px-2">
        {title || '✦ ✦ ✦'}
      </span>
    )}
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C9A84C] to-[#DFC06A]" />
  </div>
);
