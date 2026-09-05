import React, { useState } from 'react';
import { Heart, ZoomIn, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GoldDivider } from './FloralDecorations';

const GALLERY_PHOTOS = [
  {
    id: 1,
    src: '/gallery/couple-1.png',
    title: 'Sandeep & Devika',
    subtitle: 'Two Souls, One Heart',
    caption: 'Cherishing the sacred bond of love and togetherness.',
  },
  {
    id: 2,
    src: '/gallery/couple-2.png',
    title: 'Gazing into Forever',
    subtitle: 'A Blessed Union',
    caption: 'Every glance speaks a thousand unspoken promises.',
  },
  {
    id: 3,
    src: '/gallery/couple-3.png',
    title: 'Traditional Elegance',
    subtitle: 'Heritage & Grace',
    caption: 'Rooted in timeless culture and family values.',
  },
  {
    id: 4,
    src: '/gallery/couple-4.png',
    title: 'Hand in Hand',
    subtitle: 'Walking the Path of Life',
    caption: 'Stepping into a lifetime of endless joy and companionship.',
  },
  {
    id: 5,
    src: '/gallery/couple-5.png',
    title: 'Together in Harmony',
    subtitle: 'Love Blossoms',
    caption: 'Under the green canopies, blooming in eternal affection.',
  },
];

export const MomentsGallery = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  return (
    <section className="w-full max-w-5xl mx-auto my-14 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/40 text-[#9C7A3C] text-xs uppercase tracking-widest font-semibold mb-2">
          <Camera className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Pre-Wedding Memories</span>
        </div>
        <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#3D2817]">
          Moments of Togetherness
        </h3>
        <p className="font-cormorant italic text-sm sm:text-base text-[#7A624E] mt-1">
          Capturing the joyful smiles and sweet romance of Sandeep &amp; Devika
        </p>
        <GoldDivider icon={<Heart className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />} />
      </div>

      {/* Featured Photo + Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Main Highlight Photo */}
        <div
          onClick={() => openLightbox(0)}
          className="md:col-span-7 relative group cursor-pointer overflow-hidden rounded-3xl border-2 border-[#C9A84C]/50 shadow-xl bg-white aspect-[3/4] sm:aspect-[4/5]"
        >
          <img
            src={GALLERY_PHOTOS[0].src}
            alt={GALLERY_PHOTOS[0].title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-90 transition-opacity" />

          {/* Bottom Card details */}
          <div className="absolute bottom-0 inset-x-0 p-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-[#C9A84C]/80 backdrop-blur-sm text-[0.65rem] uppercase tracking-widest font-montserrat font-bold mb-2">
              Featured Portrait
            </span>
            <h4 className="font-script text-3xl sm:text-4xl leading-tight">
              {GALLERY_PHOTOS[0].title}
            </h4>
            <p className="font-cormorant italic text-sm sm:text-base text-yellow-100/90 mt-1">
              "{GALLERY_PHOTOS[0].caption}"
            </p>
          </div>

          <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="w-4 h-4" />
          </div>
        </div>

        {/* 4 Photo Grid */}
        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {GALLERY_PHOTOS.slice(1).map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx + 1)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-[#C9A84C]/45 shadow-md bg-white aspect-[3/4]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-cinzel text-xs font-bold leading-tight truncate">
                  {photo.title}
                </p>
                <p className="text-[0.65rem] text-yellow-100 font-montserrat truncate">
                  {photo.subtitle}
                </p>
              </div>

              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-lg w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9A84C]/60 shadow-2xl bg-black">
              <img
                src={GALLERY_PHOTOS[activePhotoIndex].src}
                alt={GALLERY_PHOTOS[activePhotoIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="mt-3 text-center text-white">
              <h4 className="font-cinzel text-lg font-bold text-yellow-200">
                {GALLERY_PHOTOS[activePhotoIndex].title}
              </h4>
              <p className="font-cormorant italic text-sm text-white/80">
                {GALLERY_PHOTOS[activePhotoIndex].caption}
              </p>
              <span className="text-[0.7rem] text-white/50 font-montserrat">
                {activePhotoIndex + 1} of {GALLERY_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
