// Wedding Audio Manager supporting both custom audio tracks (MP3/WAV/AAC) and Web Audio API synthesizer fallback
class WeddingAudioManager {
  constructor() {
    this.audioCtx = null;
    this.audioElement = null;
    this.audioSrc = '/wedding-music.mp3'; // Default customizable audio path
    this.isPlaying = false;
    this.isMuted = false;
    this.intervalId = null;
    this.gainNode = null;
    this.trackTitle = 'Traditional Wedding Flute';
    this.notes = [
      293.66, 329.63, 369.99, 440.00, 493.88, 554.37, 587.33, 659.25, 739.99, 880.00
    ];
    this.listeners = [];
  }

  init() {
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.src = this.audioSrc;
      this.audioElement.loop = true;
      this.audioElement.preload = 'auto';

      this.audioElement.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyState();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyState();
      });

      this.audioElement.addEventListener('error', () => {
        // If file not found or invalid format, fallback to synth
        if (this.isPlaying) {
          this.startSynthMelody();
        }
      });
    }

    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
        this.gainNode = this.audioCtx.createGain();
        this.gainNode.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
        this.gainNode.connect(this.audioCtx.destination);
      }
    }
  }

  setAudioSource(src, title = 'Custom Wedding Song') {
    this.audioSrc = src;
    this.trackTitle = title;
    this.init();

    const wasPlaying = this.isPlaying;
    this.stopMelody();

    if (this.audioElement) {
      this.audioElement.src = src;
      this.audioElement.load();
    }

    if (wasPlaying) {
      this.startMelody();
    }
    this.notifyState();
  }

  playEnvelopeOpenSound() {
    this.init();
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;
      const sweepNotes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      sweepNotes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const noteGain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        noteGain.gain.setValueAtTime(0.001, now + idx * 0.08);
        noteGain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.08 + 0.04);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.6);

        osc.connect(noteGain);
        noteGain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.65);
      });
    } catch (e) {
      console.warn('Audio effect error:', e);
    }
  }

  startMelody() {
    this.init();
    this.isPlaying = true;

    // Try HTML5 Audio first (if user provided MP3 or custom source)
    if (this.audioElement && this.audioSrc) {
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.notifyState();
          })
          .catch(() => {
            // If failed (e.g. 404 on custom file), run synth melody
            this.startSynthMelody();
          });
        return;
      }
    }

    this.startSynthMelody();
  }

  startSynthMelody() {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    } catch (e) {}

    if (this.intervalId) return;
    this.isPlaying = true;
    this.notifyState();

    const ragaSequence = [
      0, 1, 2, 3, 4, 3, 2, 1,
      0, 2, 4, 5, 6, 5, 4, 2,
      3, 4, 6, 7, 6, 4, 3, 1,
      0, 1, 3, 2, 0, 1, 0, 0
    ];

    let seqIdx = 0;
    const playNextNote = () => {
      if (!this.isPlaying || !this.audioCtx) return;

      const noteIdx = ragaSequence[seqIdx % ragaSequence.length];
      const baseFreq = this.notes[noteIdx % this.notes.length];
      seqIdx++;

      const now = this.audioCtx.currentTime;
      const osc1 = this.audioCtx.createOscillator();
      const osc2 = this.audioCtx.createOscillator();
      const noteGain = this.audioCtx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(baseFreq, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(baseFreq * 2, now);

      const duration = 0.85;
      const attack = 0.12;

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.12, now + attack);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc1.connect(noteGain);
      osc2.connect(noteGain);

      if (this.gainNode) {
        noteGain.connect(this.gainNode);
      } else {
        noteGain.connect(this.audioCtx.destination);
      }

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.1);
      osc2.stop(now + duration + 0.1);
    };

    playNextNote();
    this.intervalId = setInterval(playNextNote, 620);
  }

  stopMelody() {
    this.isPlaying = false;
    if (this.audioElement) {
      try {
        this.audioElement.pause();
      } catch (e) {}
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.notifyState();
  }

  toggle() {
    if (this.isPlaying) {
      this.stopMelody();
    } else {
      this.startMelody();
    }
    return this.isPlaying;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notifyState() {
    this.listeners.forEach((fn) =>
      fn({
        isPlaying: this.isPlaying,
        trackTitle: this.trackTitle,
        audioSrc: this.audioSrc,
      })
    );
  }
}

export const weddingAudio = new WeddingAudioManager();
