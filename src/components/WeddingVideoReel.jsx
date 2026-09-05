import React, { useRef, useEffect, useState } from 'react';
import { Film, Sparkles, Heart } from 'lucide-react';
import { GoldDivider } from './FloralDecorations';

export const WeddingVideoReel = () => {
  const containerRef = useRef(null);
  const [dims, setDims] = useState({ width: 320, height: 569 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      setDims({ width, height });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto my-14 px-4 text-center">
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/40 text-[#9C7A3C] text-xs uppercase tracking-widest font-semibold mb-2">
          <Film className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Special Wedding Reel</span>
        </div>
        <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#3D2817]">
          Our Special Moments
        </h3>
        {/* <p className="font-cormorant italic text-sm sm:text-base text-[#7A624E] mt-1">
          "Raataan Lambiyan" — Beautiful Dance Cover by Nivi &amp; Ishanvi (Laasya)
        </p> */}
        <GoldDivider icon={<Sparkles className="w-4 h-4 text-[#C9A84C]" />} />
      </div>

      {/* Vertical 9:16 Smartphone Mockup Frame */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
          {/* Ambient Gold Glow behind frame */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#DFC06A]/30 via-[#D9777F]/20 to-[#DFC06A]/30 rounded-[48px] blur-xl opacity-75 pointer-events-none" />

          {/* Smartphone Bezel */}
          <div className="relative rounded-[42px] p-3 bg-gradient-to-b from-[#222222] via-[#111111] to-[#1c1c1c] border-2 border-[#C9A84C]/80 shadow-[0_25px_60px_-15px_rgba(61,43,31,0.35)] overflow-hidden">
            {/* Top Speaker / Dynamic Island Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-20 h-4 bg-black rounded-full border border-neutral-700/50 flex items-center justify-end px-2">
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* Vertical Video Screen Container (9:16 Aspect Ratio) */}
            <div
              ref={containerRef}
              className="relative w-full aspect-[9/16] rounded-[34px] overflow-hidden bg-black shadow-inner"
            >
              <video
                src="/gallery/wedvideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 object-cover"
                style={{
                  width: dims.height,
                  height: dims.width,
                  transform: 'translate(-50%, -50%) rotate(-90deg)',
                }}
              />

              {/* Bottom floating badge on the video */}
              {/* <div className="absolute bottom-3 inset-x-3 pointer-events-none z-10 flex items-center justify-between px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-left">
                <div>
                  <p className="font-montserrat text-[0.62rem] font-bold text-yellow-300 uppercase tracking-wider">
                    Wedding Soundtrack
                  </p>
                  <p className="font-cormorant font-bold text-xs sm:text-sm truncate">
                    Raataan Lambiyan (Nivi &amp; Ishanvi)
                  </p>
                </div>
                <Heart className="w-4 h-4 text-red-400 fill-red-400 shrink-0 animate-pulse" />
              </div> */}
            </div>

            {/* Bottom Home Indicator Line */}
            <div className="w-24 h-1 bg-neutral-600 rounded-full mx-auto mt-2.5 opacity-60" />
          </div>
        </div>
      </div>

      <p className="text-xs text-[#7A624E] font-cormorant italic mt-4">
        A little dance, a lot of love
      </p>
    </section>
  );
};