import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { GoldDivider } from './FloralDecorations';

export const CoupleCard = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-8 px-4 text-center">
      {/* Invitation Host Intro */}
      <div className="mb-6">
        <h4 className="font-cinzel text-base sm:text-lg tracking-widest text-[#7A5C28] uppercase font-bold">
          P. K Suryakumar &amp; Suma suryan
        </h4>
        <p className="font-montserrat text-xs sm:text-sm text-[#7A624E] mt-1">
          Puthankalam (H), Kulappadam, Kumaramputhur P.O., Mannarkkad
        </p>
        <p className="font-montserrat text-xs text-[#9C7A3C] font-semibold mt-0.5">
          Ph: <a href="tel:9496351724" className="hover:underline">9496351724</a>
        </p>

        <p className="font-cormorant italic text-base sm:text-xl text-[#3D2817] max-w-xl mx-auto mt-5 leading-relaxed">
          "We request the honour of your gracious presence &amp; blessings on the auspicious occasion of the wedding of our beloved son"
        </p>
      </div>

      <GoldDivider icon={<Heart className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />} />

      {/* Main Couple Card */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EB] border-2 border-[#C9A84C]/50 shadow-2xl overflow-hidden my-6">
        {/* Subtle corner golden filigree borders */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C]" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]" />

        {/* Featured Couple Photo in Ornate Arch Frame */}
        <div className="relative mx-auto my-4 w-48 sm:w-60 aspect-[3/4] rounded-t-full rounded-b-3xl p-1.5 bg-gradient-to-b from-[#DFC06A] via-[#C9A84C] to-[#9C7A3C] shadow-2xl">
          <div className="w-full h-full rounded-t-full rounded-b-[22px] overflow-hidden border-2 border-white bg-[#FAF6EF]">
            <img
              src="/gallery/couple-1.png"
              alt="Sandeep & Devika"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Subtle gold badge under photo */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/95 border border-[#C9A84C]/60 shadow-md whitespace-nowrap">
            <span className="font-cinzel text-[0.65rem] tracking-widest text-[#7A5C28] uppercase font-bold">
              Together Forever
            </span>
          </div>
        </div>

        {/* Groom Section */}
        <div className="mt-7 mb-4">
          <p className="font-montserrat text-[0.68rem] sm:text-xs uppercase tracking-[0.25em] text-[#9C7A3C] font-bold">
            The Groom
          </p>
          <h2 className="font-script text-4xl sm:text-6xl text-[#3D2817] my-2 leading-snug">
            Sandeep Suryan. Ps
          </h2>
          <div className="font-cormorant italic text-xs sm:text-sm text-[#7A624E] max-w-lg mx-auto leading-normal bg-[#FAF6EF]/60 p-2.5 rounded-xl border border-[#C9A84C]/20">
            (Grandson of Late Krishnankutty Gupthan &amp; Late Lakshmikutti Amma, Puthankalam; <br className="hidden sm:inline" />
            Late Sukumaran Master &amp; Late Vasumathi, Kannath House)
          </div>
        </div>

        {/* Auspicious Ampersand with Heart Icon */}
        <div className="flex items-center justify-center my-3">
          <div className="relative flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#DFC06A] to-[#FAF6EF] p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="font-script text-2xl text-[#9C7A3C]">&amp;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bride Section */}
        <div className="my-4">
          <p className="font-montserrat text-[0.68rem] sm:text-xs uppercase tracking-[0.25em] text-[#9C7A3C] font-bold">
            The Bride
          </p>
          <h2 className="font-script text-4xl sm:text-6xl text-[#3D2817] my-2 leading-snug">
            Devika. Kt
          </h2>
          <div className="font-cormorant italic text-sm sm:text-base text-[#7A624E]">
            <p className="font-semibold text-[#3D2817]">D/o Ravi KT &amp; Sunitha M</p>
            <p className="text-xs sm:text-sm mt-0.5">Kammukkanthodi (H), Perimbadari P.O., Mannarkkad</p>
          </div>
        </div>
      </div>
    </div>
  );
};
