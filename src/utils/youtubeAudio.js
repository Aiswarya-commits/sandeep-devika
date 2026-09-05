// YouTube Background Audio Player Manager
// Configured with "Raataan Lambiyan" (0-7znzS4Nqw - Nivi & Ishanvi Cover)

class YouTubeAudioPlayer {
  constructor() {
    this.videoId = '0-7znzS4Nqw'; // Raataan Lambiyan (Nivi & Ishanvi Cover)
    this.trackTitle = 'Raataan Lambiyan (Nivi & Ishanvi)';
    this.player = null;
    this.isReady = false;
    this.isPlaying = false;
    this.pendingPlay = false;
    this.listeners = [];
    this.showVideo = false;

    this.init();
  }

  init() {
    if (typeof window === 'undefined') return;

    // Load YouTube IFrame API script if not loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    // Assign YouTube API callback
    const prevOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevOnYouTubeIframeAPIReady) prevOnYouTubeIframeAPIReady();
      this.createPlayer();
    };

    if (window.YT && window.YT.Player) {
      this.createPlayer();
    }
  }

  createPlayer() {
    if (this.player || !window.YT || !window.YT.Player) return;

    // Ensure mount element exists
    let container = document.getElementById('yt-audio-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'yt-audio-container';
      container.style.position = 'fixed';
      container.style.bottom = '-9999px';
      container.style.left = '-9999px';
      container.style.width = '1px';
      container.style.height = '1px';
      container.style.opacity = '0.001';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '-1';
      document.body.appendChild(container);
    }

    try {
      this.player = new window.YT.Player('yt-audio-container', {
        height: '200',
        width: '200',
        videoId: this.videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: this.videoId, // Required for loop to repeat the same video
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            this.isReady = true;
            event.target.setVolume(85);
            if (this.pendingPlay) {
              this.pendingPlay = false;
              this.play();
            }
          },
          onStateChange: (event) => {
            // YT.PlayerState.PLAYING === 1
            if (event.data === 1) {
              this.isPlaying = true;
            } else if (event.data === 2 || event.data === 0) {
              // PAUSED or ENDED
              this.isPlaying = false;
            }
            this.notify();
          },
          onError: (e) => {
            console.warn('YouTube Player notice:', e);
          },
        },
      });
    } catch (e) {
      console.warn('Error creating YT player:', e);
    }
  }

  play() {
    if (this.player && this.isReady && typeof this.player.playVideo === 'function') {
      try {
        this.player.playVideo();
        this.isPlaying = true;
        this.notify();
      } catch (e) {
        console.warn('YT playVideo error:', e);
      }
    } else {
      this.pendingPlay = true;
      this.init();
    }
  }

  pause() {
    this.pendingPlay = false;
    if (this.player && this.isReady && typeof this.player.pauseVideo === 'function') {
      try {
        this.player.pauseVideo();
        this.isPlaying = false;
        this.notify();
      } catch (e) {}
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  setVideo(videoId, title = 'Raataan Lambiyan') {
    this.videoId = videoId;
    this.trackTitle = title;
    if (this.player && this.isReady && typeof this.player.loadVideoById === 'function') {
      this.player.loadVideoById({
        videoId: this.videoId,
        startSeconds: 0,
      });
      this.play();
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener({
      isPlaying: this.isPlaying,
      trackTitle: this.trackTitle,
      videoId: this.videoId,
    });
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach((fn) =>
      fn({
        isPlaying: this.isPlaying,
        trackTitle: this.trackTitle,
        videoId: this.videoId,
      })
    );
  }
}

export const ytAudio = new YouTubeAudioPlayer();
