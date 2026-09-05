import React, { useState, useEffect } from 'react';
import { EnvelopeModal } from './components/EnvelopeModal';
import { GaneshaHeader } from './components/GaneshaHeader';
import { CoupleCard } from './components/CoupleCard';
import { MomentsGallery } from './components/MomentsGallery';
import { WeddingVideoReel } from './components/WeddingVideoReel';
import { Countdown } from './components/Countdown';
import { EventsSection } from './components/EventsSection';
import { WishesGuestbook } from './components/WishesGuestbook';
import { PetalShower } from './components/PetalShower';
import { MusicPlayer } from './components/MusicPlayer';
import { ShareBar } from './components/ShareBar';
import { FloralTopRight, FloralBottomLeft } from './components/FloralDecorations';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  // Scroll to top when envelope opens
  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF6EF] via-[#FDF7EE] to-[#FAF6EF] text-[#3D2817] font-montserrat overflow-x-hidden selection:bg-[#DFC06A]/30">
      {/* 3D Wax Seal Opening Envelope Modal */}
      <EnvelopeModal
        isOpen={isEnvelopeOpen}
        onOpen={handleOpenEnvelope}
      />

      {/* Floating Audio Controller */}
      <MusicPlayer />

      {/* Falling Rose Petals & Shower Blessings Action */}
      <PetalShower />

      {/* Elegant Watercolor Floral Corner Accents matching the physical card */}
      <div className="fixed top-0 right-0 z-20 pointer-events-none">
        <FloralTopRight />
      </div>
      <div className="fixed bottom-0 left-0 z-20 pointer-events-none">
        <FloralBottomLeft />
      </div>

      {/* Main Wedding Invitation Website Content */}
      <main className={`relative z-10 transition-opacity duration-1000 ${isEnvelopeOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
          {/* Sacred Ganesha Header */}
          <GaneshaHeader />

          {/* Couple & Parents Invitation Section with Portrait */}
          <CoupleCard />

          {/* Moments of Togetherness Photo Gallery */}
          <MomentsGallery />

          {/* Special Wedding Video Reel (Vertical 9:16 Frame) */}
          <WeddingVideoReel />

          {/* Real-time Countdown Timer */}
          <Countdown />

          {/* Dual Celebrations & Venues (Muhurtham & Reception) */}
          <EventsSection />

          {/* Wishes & RSVP Guestbook */}
          <WishesGuestbook />

          {/* Compliments, WhatsApp Sharing & Footer */}
          <ShareBar onReopenEnvelope={handleReopenEnvelope} />
        </div>
      </main>
    </div>
  );
}

export default App;
