import React, { useState } from 'react';
import { Share2, Phone, Printer, RefreshCw, Eye, X } from 'lucide-react';
import { GoldDivider } from './FloralDecorations';

export const ShareBar = ({ onReopenEnvelope }) => {
  const [showOriginalCard, setShowOriginalCard] = useState(false);

  const weddingMessage = `✨ Wedding Invitation ✨\n\nYou are cordially invited to celebrate the wedding of\n💍 Sandeep Suryan P.S. & Devika K.T. 💍\n\n🗓 Date: Sunday, September 13, 2026 (1202 Chingam 28)\n\n🪔 Muhurtham (10:30 AM - 11:30 AM) at Liya Auditorium, Changaleeri\n🎉 Reception (4:30 PM - 7:30 PM) at Community Hall, Kunthipuzha\n\nWith best compliments from Swaroop Suryan & Family.\n\nView Virtual Invitation & Details: ${window.location.href}`;

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(weddingMessage)}`;
    window.open(url, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="w-full max-w-4xl mx-auto my-12 px-4 text-center">
      <GoldDivider />

      {/* Compliments Section from the card */}
      <div className="my-6 p-6 rounded-3xl bg-white/70 border border-[#C9A84C]/35 shadow-sm max-w-lg mx-auto">
        <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#9C7A3C] font-semibold">
          With Best Compliments From
        </p>
        <h4 className="font-script text-3xl sm:text-4xl text-[#3D2817] my-1">
          Swaroop Suryan
        </h4>
        <p className="font-cormorant italic text-sm text-[#7A624E]">
          &amp; Suryan Family, Relatives &amp; Friends
        </p>
      </div>

      {/* Quick Action Share Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        {/* WhatsApp Share */}
        <button
          onClick={handleWhatsAppShare}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-montserrat text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#20bd5a] transition cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share on WhatsApp</span>
        </button>

        {/* View Physical Card */}
        <button
          onClick={() => setShowOriginalCard(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#C9A84C]/60 text-[#3D2817] font-montserrat text-xs font-bold uppercase tracking-wider shadow hover:bg-[#FAF6EF] transition cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-[#9C7A3C]" />
          <span>View Original Card</span>
        </button>

        {/* Call Family */}
        <a
          href="tel:9496351724"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#C9A84C]/60 text-[#3D2817] font-montserrat text-xs font-bold uppercase tracking-wider shadow hover:bg-[#FAF6EF] transition cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-[#9C7A3C]" />
          <span>Call: 9496351724</span>
        </a>

        {/* Replay Envelope Animation */}
        <button
          onClick={onReopenEnvelope}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#C9A84C]/60 text-[#3D2817] font-montserrat text-xs font-bold uppercase tracking-wider shadow hover:bg-[#FAF6EF] transition cursor-pointer"
          title="Close and view 3D Envelope animation again"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#9C7A3C]" />
          <span>View Envelope Again</span>
        </button>

        {/* Print / Save Card */}
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#C9A84C]/60 text-[#3D2817] font-montserrat text-xs font-bold uppercase tracking-wider shadow hover:bg-[#FAF6EF] transition cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5 text-[#9C7A3C]" />
          <span>Print Invitation</span>
        </button>
      </div>

      {/* Original Card Lightbox Modal */}
      {showOriginalCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowOriginalCard(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-2 border-b border-[#C9A84C]/20">
              <span className="font-cinzel text-xs font-bold text-[#3D2817] tracking-wider">
                Original Physical Invitation Card
              </span>
              <button
                onClick={() => setShowOriginalCard(false)}
                className="p-1 rounded-full hover:bg-neutral-100 text-neutral-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-y-auto p-1">
              <img
                src="/invitation-card.jpeg"
                alt="Original Wedding Invitation Card"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      )}

      {/* Copyright / blessings */}
      <div className="mt-10 mb-6 text-xs text-[#7A624E] font-montserrat">
        <p>Celebrating the union of Sandeep Suryan &amp; Devika</p>
        <p className="mt-1 opacity-75">Sunday, 13 September 2026 • Mannarkkad, Palakkad</p>
      </div>
    </footer>
  );
};
