import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Settings, X, ExternalLink, RefreshCw, Play, Pause, Film } from 'lucide-react';
import { ytAudio } from '../utils/youtubeAudio';
import { weddingAudio } from '../utils/audio';

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackTitle, setTrackTitle] = useState('Raataan Lambiyan');
  const [showSettings, setShowSettings] = useState(false);
  const [newYoutubeUrl, setNewYoutubeUrl] = useState('');
  const [showMiniVideo, setShowMiniVideo] = useState(false);

  useEffect(() => {
    const unsubscribe = ytAudio.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      if (state.trackTitle) {
        setTrackTitle(state.trackTitle);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    ytAudio.toggle();
  };

  const extractYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleUpdateSong = (e) => {
    e.preventDefault();
    const videoId = extractYoutubeId(newYoutubeUrl.trim());
    if (videoId) {
      ytAudio.setVideo(videoId, 'Custom Wedding Song');
      setNewYoutubeUrl('');
      setShowSettings(false);
    } else {
      alert('Please enter a valid YouTube URL (e.g., https://youtu.be/...)');
    }
  };

  const handleSwitchToFlute = () => {
    ytAudio.pause();
    weddingAudio.startMelody();
    setTrackTitle('Classical Wedding Flute');
    setIsPlaying(true);
    setShowSettings(false);
  };

  const handleSwitchToRaataan = () => {
    weddingAudio.stopMelody();
    ytAudio.setVideo('0-7znzS4Nqw', 'Raataan Lambiyan - Nivi & Ishanvi');
    ytAudio.play();
    setShowSettings(false);
  };

  return (
    <>
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        {/* Main Play/Pause Button */}
        <button
          onClick={handleToggle}
          className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#C9A84C]/50 text-[#7A5C28] shadow-lg hover:bg-white hover:border-[#C9A84C] transition-all cursor-pointer group"
          title={isPlaying ? 'Pause Background Song' : 'Play Song'}
        >
          {/* Animated Sound Wave Bars when playing */}
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3.5">
              <span className="w-0.5 bg-[#C9A84C] h-full animate-[pulse_0.6s_ease-in-out_infinite]" />
              <span className="w-0.5 bg-[#9C7A3C] h-2 animate-[pulse_0.4s_ease-in-out_infinite]" />
              <span className="w-0.5 bg-[#C9A84C] h-3 animate-[pulse_0.8s_ease-in-out_infinite]" />
              <span className="w-0.5 bg-[#9C7A3C] h-1.5 animate-[pulse_0.5s_ease-in-out_infinite]" />
            </div>
          ) : (
            <Music className="w-3.5 h-3.5 text-[#9C7A3C] opacity-70" />
          )}

          <div className="flex flex-col items-start leading-none">
            <span className="font-montserrat text-[0.62rem] font-bold tracking-wider uppercase text-[#3D2817] max-w-[135px] sm:max-w-[170px] truncate">
              {isPlaying ? trackTitle : 'Raataan Lambiyan'}
            </span>
            <span className="text-[0.55rem] text-[#9C7A3C] font-semibold tracking-wide">
              {isPlaying ? 'Playing' : 'Tap to Play'}
            </span>
          </div>

          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 text-[#C9A84C]" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-[#7A624E]" />
          )}
        </button>

        {/* Change Song / Settings Button */}
        <button
          onClick={() => setShowSettings(true)}
          className="p-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#C9A84C]/50 text-[#7A5C28] shadow-lg hover:bg-white hover:text-[#C9A84C] transition cursor-pointer"
          title="Music Settings & YouTube Track"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* Mini Video Player Popup if enabled */}
      {showMiniVideo && (
        <div className="fixed bottom-6 right-6 z-40 w-60 sm:w-64 rounded-3xl overflow-hidden bg-black/95 shadow-2xl border-2 border-[#C9A84C]/70">
          <div className="flex items-center justify-between p-2 bg-neutral-900 text-white text-xs">
            <span className="font-montserrat font-semibold flex items-center gap-1.5 text-white">
              <YouTubeIcon className="w-4 h-4 text-red-500" />
              Raataan Lambiyan Reel
            </span>
            <button
              onClick={() => setShowMiniVideo(false)}
              className="p-0.5 rounded hover:bg-neutral-800 text-neutral-400 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="relative aspect-[9/16] bg-black">
            <iframe
              src="https://www.youtube.com/embed/0-7znzS4Nqw?autoplay=1&playsinline=1"
              title="Raataan Lambiyan Nivi and Ishanvi"
              allow="autoplay; encrypted-media"
              className="w-full h-full border-0 object-cover"
            />
          </div>
        </div>
      )}

      {/* Music Settings Modal */}
      {showSettings && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowSettings(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl border border-[#C9A84C]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#C9A84C]/20">
              <div className="flex items-center gap-2">
                <YouTubeIcon className="w-5 h-5 text-red-600" />
                <h4 className="font-cinzel text-base font-bold text-[#3D2817]">
                  Wedding Song Settings
                </h4>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {/* Current Song Display */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FAF6EF] to-[#FDF4E9] border border-[#C9A84C]/35">
                <p className="text-[0.68rem] uppercase font-montserrat tracking-wider text-[#9C7A3C] font-bold mb-1">
                  Active Wedding Song
                </p>
                <h5 className="font-cormorant font-bold text-lg text-[#3D2817]">
                  Raataan Lambiyan — Nivi &amp; Ishanvi (Cover)
                </h5>
                <p className="font-montserrat text-xs text-[#7A624E] mt-0.5">
                  Shershaah • Cover by Nivi &amp; Ishanvi (Laasya)
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href="https://youtu.be/0-7znzS4Nqw?si=dUIOQ-Tafy6kYDlJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#9C7A3C] hover:underline font-semibold"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Watch on YouTube</span>
                  </a>
                  <span className="text-gray-300">•</span>
                  <button
                    onClick={() => {
                      setShowMiniVideo(!showMiniVideo);
                      setShowSettings(false);
                    }}
                    className="text-xs text-[#7A5C28] hover:underline font-semibold cursor-pointer"
                  >
                    {showMiniVideo ? 'Hide Mini Video' : 'Pop-out Video Clip'}
                  </button>
                </div>
              </div>

              {/* Option to change to another YouTube song */}
              <div>
                <p className="font-montserrat text-xs font-bold text-[#7A5C28] uppercase tracking-wider mb-2">
                  Change to Another YouTube Song
                </p>
                <form onSubmit={handleUpdateSong} className="flex gap-2">
                  <input
                    type="url"
                    value={newYoutubeUrl}
                    onChange={(e) => setNewYoutubeUrl(e.target.value)}
                    placeholder="https://youtu.be/..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#C9A84C]/40 bg-[#FAF6EF]/40 text-xs text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#9C7A3C] to-[#C9A84C] text-white font-montserrat text-xs font-bold shadow hover:opacity-95 cursor-pointer"
                  >
                    Set Song
                  </button>
                </form>
              </div>

              {/* Sound Presets */}
              <div className="pt-2 border-t border-[#C9A84C]/20 flex gap-2">
                <button
                  onClick={handleSwitchToRaataan}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF6EF] border border-[#C9A84C]/40 text-xs font-montserrat font-bold text-[#3D2817] hover:bg-[#F5EEDD] transition text-center cursor-pointer"
                >
                  🎵 Raataan Lambiyan
                </button>
                <button
                  onClick={handleSwitchToFlute}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-[#C9A84C]/30 text-xs font-montserrat font-semibold text-[#7A624E] hover:bg-[#FAF6EF] transition text-center cursor-pointer"
                >
                  🪈 Classical Flute
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
