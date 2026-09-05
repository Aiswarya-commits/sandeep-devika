import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Check, Copy } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { GoldDivider } from './FloralDecorations';

export const EventsSection = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const events = [
    {
      key: 'ceremony',
      badge: 'Sacred Ceremony (Muhurtham)',
      badgeColor: 'bg-[#9C7A3C]/10 text-[#7A5C28] border-[#9C7A3C]/30',
      title: 'Marriage Solemnisation',
      subheading: '1202 Chingam 28 (Malayalam Calendar)',
      date: 'Sunday, 13th September 2026',
      time: '10:30 AM – 11:30 AM',
      timeNote: 'Muhoortham between 10:30 AM and 11:30 AM',
      venueName: 'Liya Auditorium',
      venueLocation: 'Changaleeri, Mannarkkad, Kerala',
      mapsQuery: 'Liya Auditorium Changaleeri Kerala',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Liya+Auditorium+Changaleeri+Kerala',
      icon: '🪔',
    },
    {
      key: 'reception',
      badge: 'Evening Celebration',
      badgeColor: 'bg-[#DFC06A]/20 text-[#6B4B18] border-[#C9A84C]/40',
      title: 'Wedding Reception',
      subheading: 'Dinner & Warm Celebrations',
      date: 'Sunday, 13th September 2026',
      time: '4:30 PM – 7:30 PM',
      timeNote: 'Welcoming guests for dinner and blessings',
      venueName: 'Community Hall',
      venueLocation: 'Kunthipuzha, Mannarkkad, Kerala',
      mapsQuery: 'Community Hall Kunthipuzha Mannarkkad',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Community+Hall+Kunthipuzha+Mannarkkad',
      icon: '🎉',
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3D2817]">
          Wedding Celebrations &amp; Venue
        </h3>
        <p className="font-cormorant italic text-sm sm:text-base text-[#7A624E] mt-1">
          Please join us at both venues to celebrate the special union
        </p>
        <GoldDivider />
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {events.map((evt, idx) => (
          <div
            key={evt.key}
            className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#FFFFFF] via-[#FAF6EF] to-[#FDF4E9] border-1.5 border-[#C9A84C]/45 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-[0.7rem] font-montserrat uppercase tracking-wider font-bold border ${evt.badgeColor}`}>
                  {evt.badge}
                </span>
                <span className="text-2xl select-none">{evt.icon}</span>
              </div>

              <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#3D2817] leading-tight">
                {evt.title}
              </h4>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#9C7A3C] font-semibold mt-0.5">
                {evt.subheading}
              </p>

              {/* Date & Time block */}
              <div className="mt-5 space-y-3 bg-white/70 p-4 rounded-2xl border border-[#C9A84C]/25">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/40 flex items-center justify-center shrink-0 text-[#9C7A3C]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-montserrat text-xs text-[#7A624E] uppercase tracking-wider">Date</div>
                    <div className="font-cormorant font-bold text-base sm:text-lg text-[#3D2817]">
                      {evt.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/40 flex items-center justify-center shrink-0 text-[#9C7A3C]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-montserrat text-xs text-[#7A624E] uppercase tracking-wider">Timing</div>
                    <div className="font-cormorant font-bold text-base sm:text-lg text-[#3D2817]">
                      {evt.time}
                    </div>
                    <p className="text-[0.72rem] text-[#7A624E] italic">{evt.timeNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/40 flex items-center justify-center shrink-0 text-[#9C7A3C]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-montserrat text-xs text-[#7A624E] uppercase tracking-wider">Venue</div>
                    <div className="font-cormorant font-bold text-base sm:text-lg text-[#3D2817]">
                      {evt.venueName}
                    </div>
                    <p className="text-xs text-[#7A624E]">{evt.venueLocation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-[#C9A84C]/20 flex flex-col sm:flex-row gap-2.5">
              <a
                href={evt.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#9C7A3C] via-[#C9A84C] to-[#DFC06A] text-white font-montserrat text-xs tracking-wider uppercase font-bold shadow hover:opacity-95 transition cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={getGoogleCalendarUrl(evt.key)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-[#C9A84C]/50 text-[#7A5C28] font-montserrat text-xs tracking-wider font-semibold hover:bg-[#FAF6EF] transition cursor-pointer"
                title="Add to Google Calendar"
              >
                <CalendarPlus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add to Calendar</span>
                <span className="sm:hidden">Calendar</span>
              </a>

              <button
                onClick={() => handleCopy(`${evt.venueName}, ${evt.venueLocation}`, idx)}
                className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-white border border-[#C9A84C]/50 text-[#7A5C28] hover:bg-[#FAF6EF] transition cursor-pointer"
                title="Copy Address"
              >
                {copiedIndex === idx ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-[#9C7A3C]" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
