import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, MessageSquareHeart, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GoldDivider } from './FloralDecorations';

const INITIAL_WISHES = [
  {
    id: 1,
    name: 'Swaroop Suryan',
    relation: 'Brother / Family',
    attendance: 'Joyfully Attending',
    message: 'Wishing dear Sandeep & Devika a lifetime of endless laughter, boundless love, and cherished moments together! So thrilled for both of you! ❤️✨',
    date: 'Just now',
  },
  {
    id: 2,
    name: 'Anjali & Vivek',
    relation: 'Friends',
    attendance: 'Joyfully Attending',
    message: 'Heartiest congratulations to the wonderful couple! May your marital journey be showered with divine grace and eternal joy.',
    date: '1 hour ago',
  },
  {
    id: 3,
    name: 'K. Unnikrishnan & Family',
    relation: 'Family Well-wisher',
    attendance: 'Joyfully Attending',
    message: 'Dear Sandeep and Devika, best wishes for a blissful married life. Looking forward to celebrating on Sept 13th at Liya Auditorium!',
    date: 'Yesterday',
  }
];

export const WishesGuestbook = () => {
  const [wishes, setWishes] = useState(() => {
    try {
      const saved = localStorage.getItem('sandeep_devika_wishes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn(e);
    }
    return INITIAL_WISHES;
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [attendance, setAttendance] = useState('Joyfully Attending');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sandeep_devika_wishes', JSON.stringify(wishes));
    } catch (e) {
      console.warn(e);
    }
  }, [wishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      relation: relation.trim() || 'Well-wisher',
      attendance,
      message: message.trim(),
      date: 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setRelation('');
    setMessage('');
    setSubmitted(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#C9A84C', '#D9777F', '#DFC06A', '#FAF6EF']
      });
    } catch (e) {}

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/40 text-[#9C7A3C] text-xs uppercase tracking-widest font-semibold mb-2">
          <MessageSquareHeart className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Guestbook &amp; RSVP</span>
        </div>
        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3D2817]">
          Send Your Blessings &amp; Wishes
        </h3>
        <p className="font-cormorant italic text-sm sm:text-base text-[#7A624E] mt-1">
          Leave a message for Sandeep &amp; Devika to cherish forever
        </p>
        <GoldDivider />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Wish Submission Form */}
        <div className="lg:col-span-5 bg-white/90 p-6 sm:p-7 rounded-3xl border border-[#C9A84C]/40 shadow-lg">
          <h4 className="font-cinzel text-lg font-bold text-[#3D2817] mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C9A84C]" />
            <span>Bless the Couple</span>
          </h4>

          {submitted ? (
            <div className="p-5 rounded-2xl bg-[#FAF6EF] border border-[#C9A84C]/50 text-center animate-fade-in">
              <Heart className="w-8 h-8 text-[#C9A84C] fill-[#C9A84C] mx-auto mb-2 animate-bounce" />
              <p className="font-cormorant font-bold text-lg text-[#3D2817]">Thank you for your blessings!</p>
              <p className="font-montserrat text-xs text-[#7A624E] mt-1">Your warm wishes have been added to the guestbook.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-montserrat uppercase tracking-wider text-[#7A624E] font-semibold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul & Family"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9A84C]/40 bg-[#FAF6EF]/50 text-sm text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-montserrat uppercase tracking-wider text-[#7A624E] font-semibold mb-1">
                  Relationship / Location (optional)
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="e.g. Friend / Mannarkkad"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9A84C]/40 bg-[#FAF6EF]/50 text-sm text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-montserrat uppercase tracking-wider text-[#7A624E] font-semibold mb-1">
                  RSVP Attendance
                </label>
                <select
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9A84C]/40 bg-[#FAF6EF]/50 text-sm text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 cursor-pointer"
                >
                  <option value="Joyfully Attending">Joyfully Attending (See you there! 🎉)</option>
                  <option value="Sending Blessings from Afar">Sending Blessings from Afar (Unable to attend ❤️)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-montserrat uppercase tracking-wider text-[#7A624E] font-semibold mb-1">
                  Your Blessing Message *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your heartfelt congratulations and wishes..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9A84C]/40 bg-[#FAF6EF]/50 text-sm text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#9C7A3C] via-[#C9A84C] to-[#DFC06A] text-white font-montserrat text-xs tracking-wider uppercase font-bold shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Blessings</span>
              </button>
            </form>
          )}
        </div>

        {/* Wishes Display Wall */}
        <div className="lg:col-span-7 space-y-3.5 max-h-[440px] overflow-y-auto pr-1">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="p-4 rounded-2xl bg-white/80 border border-[#C9A84C]/30 shadow-sm hover:shadow transition"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <h5 className="font-cinzel text-sm sm:text-base font-bold text-[#3D2817]">
                    {w.name}
                  </h5>
                  <span className="text-[0.7rem] text-[#9C7A3C] font-montserrat">{w.relation}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/30 text-[#7A5C28]">
                    {w.attendance.includes('Joyfully') ? '✨ Attending' : '💌 Wishes'}
                  </span>
                </div>
              </div>
              <p className="font-cormorant italic text-sm sm:text-base text-[#3D2817] leading-relaxed">
                "{w.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
