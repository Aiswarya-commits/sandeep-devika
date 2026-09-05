import React, { useState } from 'react';
import { MailOpen, Sparkles, Heart, Crown, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingAudio } from '../utils/audio';
import { ytAudio } from '../utils/youtubeAudio';

export const EnvelopeModal = ({ isOpen, onOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [sealBroken, setSealBroken] = useState(false);

  const handleOpenEnvelope = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    // 1. Play paper / chime sound
    weddingAudio.playEnvelopeOpenSound();

    // 2. Break wax seal & trigger confetti shimmer
    setSealBroken(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.55 },
        colors: ['#DFC06A', '#C9A84C', '#FAF6EF', '#D9777F']
      });
    } catch (e) {}

    // 3. Start romantic wedding song (Raataan Lambiyan)
    setTimeout(() => {
      ytAudio.play();
    }, 400);

    // 4. Complete open transition after flap & card slide
    setTimeout(() => {
      onOpen();
      setIsAnimating(false);
    }, 1400);
  };

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 overflow-hidden bg-gradient-to-tr from-[#FAF6EF] via-[#FDE8DA]/80 to-[#FAF6EF] backdrop-blur-xl select-none">
      {/* Ambient background sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute text-sm text-[#C9A84C] opacity-40 top-12 left-1/4 animate-pulse">✦</div>
        <div className="absolute text-base text-[#DFC06A] opacity-40 top-24 right-1/4 animate-pulse delay-300">✦</div>
        <div className="absolute text-xs text-[#C9A84C] opacity-35 bottom-20 left-1/5 animate-pulse delay-700">✦</div>
        <div className="absolute text-sm text-[#DFC06A] opacity-35 bottom-16 right-1/5 animate-pulse delay-500">✦</div>
      </div>

      {/* Header Announcement */}
      <div className="text-center mb-6 max-w-xl mx-auto z-10 transition-all duration-700">
        <p className="font-montserrat text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] text-[#9C7A3C] font-bold mb-1">
          Wedding Invitation
        </p>
        <h1 className="font-script text-4xl sm:text-6xl md:text-7xl text-[#3D2817] leading-tight">
          Sandeep Suryan
          <span className="block font-cormorant italic font-normal text-xl sm:text-3xl text-[#C9A84C] my-1">
            with
          </span>
          Devika
        </h1>

        <div className="flex items-center justify-center gap-3 my-2.5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <Heart className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]/40" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </div>

        <p className="font-cormorant italic text-xs sm:text-sm text-[#7A624E] font-semibold">
          Sunday, September 13th, 2026 • 1202 Chingam 28
        </p>
      </div>

      {/* 3D Envelope Container */}
      <div
        onClick={handleOpenEnvelope}
        className="w-full max-w-[320px] sm:max-w-[420px] relative z-20 my-2 cursor-pointer group perspective-1000"
        title="Click to Open Invitation"
      >
        <div
          className={`relative w-full aspect-[16/10.5] rounded-2xl overflow-visible shadow-2xl transition-all duration-700 transform-style-3d ${
            isAnimating ? 'scale-105' : 'hover:scale-[1.02]'
          }`}
          style={{
            background: 'linear-gradient(145deg, #FAF6EF 0%, #F5E6C8 45%, #EAD4B0 100%)',
            border: '1.5px solid rgba(201, 168, 76, 0.65)',
            boxShadow: '0 25px 60px rgba(61, 43, 31, 0.22), 0 8px 22px rgba(201, 168, 76, 0.25)',
          }}
        >
          {/* Inner paper pattern */}
          <div className="absolute inset-2 rounded-xl border border-[#C9A84C]/25 pointer-events-none overflow-hidden opacity-30" />

          {/* Card sliding out of envelope */}
          <div
            className={`absolute inset-x-3 sm:inset-x-5 top-3 rounded-xl p-4 flex flex-col justify-between items-center text-center shadow-md pointer-events-none transition-all duration-1000 ease-out ${
              isAnimating
                ? '-translate-y-28 opacity-100 scale-105'
                : 'translate-y-4 opacity-70 scale-95'
            }`}
            style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FAF6EF 55%, #FDE8DA 100%)',
              border: '1.5px solid rgba(201, 168, 76, 0.6)',
              zIndex: 12,
            }}
          >
            <div className="pt-1">
              <div className="w-7 h-7 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/60 flex items-center justify-center mx-auto mb-1 shadow-xs">
                <Crown className="w-3.5 h-3.5 text-[#C9A84C]" />
              </div>
              <p className="font-cormorant font-bold italic text-sm sm:text-base text-[#3D2817] leading-tight">
                You Are Cordially Invited
              </p>
              <p className="font-montserrat text-[0.52rem] sm:text-[0.58rem] tracking-[0.2em] text-[#9C7A3C] uppercase font-semibold mt-0.5">
                To Celebrate Our Union
              </p>
            </div>
            <div className="pb-1 w-full">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-1" />
              <p className="font-script text-xl sm:text-2xl text-[#3D2817] leading-none">
                Sandeep &amp; Devika
              </p>
            </div>
          </div>

          {/* Envelope Front Pocket (Lower V-flap) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-15">
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)',
                background: 'linear-gradient(to top, #EAD4B0 0%, #F5E6C8 60%, #FAF6EF 100%)',
                border: '1.5px solid rgba(201, 168, 76, 0.55)',
                boxShadow: '0 4px 20px rgba(61, 43, 31, 0.1)',
              }}
            >
              <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2 opacity-60">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A84C]" />
                <Heart className="w-3 h-3 text-[#C9A84C] fill-[#C9A84C]" />
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84C]" />
              </div>
            </div>
          </div>

          {/* Envelope Top Triangle Flap (Opens in 3D) */}
          <div
            className={`absolute top-0 inset-x-0 h-[56%] pointer-events-none rounded-t-2xl overflow-hidden origin-top transition-transform duration-700 ease-in-out z-20 ${
              isAnimating ? '-rotate-x-180 opacity-0' : 'rotate-x-0'
            }`}
            style={{
              transformOrigin: 'top center',
              filter: 'drop-shadow(0 6px 12px rgba(61, 43, 31, 0.25))',
            }}
          >
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(180deg, #FAF6EF 0%, #DFC06A 65%, #C9A84C 100%)',
              }}
            />
          </div>

          {/* Royal Wax Seal */}
          <div
            className={`absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 ${
              sealBroken ? 'scale-150 opacity-0' : 'scale-100 group-hover:scale-105'
            }`}
          >
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full p-1 bg-gradient-to-tr from-[#7A1E26] via-[#B32431] to-[#E25C68] shadow-2xl flex items-center justify-center border-2 border-amber-200">
              {/* Inner ring */}
              <div className="w-full h-full rounded-full border border-yellow-200/50 flex flex-col items-center justify-center bg-[#8C1B23]">
                <span className="font-cinzel text-[0.55rem] text-yellow-200 uppercase tracking-widest font-bold leading-none">
                  Blessings
                </span>
                <span className="font-cinzel text-sm sm:text-base font-bold text-yellow-100 tracking-wider">
                  S &amp; D
                </span>
                <span className="text-[0.55rem] text-yellow-300 leading-none">
                  ॐ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tap to Open badge */}
        <div className="mt-6 flex flex-col items-center justify-center gap-1.5">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 border border-[#C9A84C]/60 shadow-lg text-[#3D2817] group-hover:bg-white transition-all transform group-hover:-translate-y-0.5">
            <MailOpen className="w-4 h-4 text-[#9C7A3C]" />
            <span className="font-montserrat font-bold text-xs tracking-[0.2em] uppercase">
              Tap to Open Invitation
            </span>
            <Sparkles className="w-4 h-4 text-[#C9A84C] animate-pulse" />
          </div>
          <p className="text-[0.68rem] text-[#7A624E] font-montserrat tracking-wider">
            Click the envelope or seal to open
          </p>
        </div>
      </div>
    </div>
  );
};
