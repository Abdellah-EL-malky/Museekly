<template>
  <div class="audio-player" v-if="currentTrack">
    <div class="player-info">
      <p class="now-playing">En lecture : {{ currentTrack.title }} - {{ currentTrack.artist }}</p>
    </div>

    <div class="player-controls">
      <button @click="togglePlay" class="play-button">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>

      <div class="volume-control">
        <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            v-model="volume"
            @change="updateVolume"
            class="volume-slider"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  data() {
    return {
      audio: null,
      isPlaying: false,
      volume: 0.7,
      currentTrack: null
    }
  },
  created() {
    this.audio = new Audio();
    this.audio.volume = this.volume;

    // Listen for audio events
    this.audio.addEventListener('ended', this.onEnded);
    this.audio.addEventListener('error', this.onError);
  },
  beforeUnmount() {
    // Clean up audio events
    this.audio.removeEventListener('ended', this.onEnded);
    this.audio.removeEventListener('error', this.onError);
    this.audio.pause();
    this.audio = null;
  },
  methods: {
    // Dans methods de AudioPlayer.vue
    playSong(track) {
      if (!track.preview) {
        console.error('No preview URL available');
        return;
      }

      if (this.currentTrack && this.currentTrack.id === track.id) {
        this.togglePlay();
        return;
      }

      // Stop current audio if playing
      if (this.isPlaying) {
        this.audio.pause();
      }

      this.audio.src = track.preview;
      this.currentTrack = {
        id: track.id,
        title: track.title,
        artist: track.artist.name,
        preview: track.preview
      };

      // Essayer de jouer
      this.audio.play()
          .then(() => {
            this.isPlaying = true;
          })
          .catch(error => {
            console.error('Audio playback error:', error);
            this.$store.commit('SET_ERROR', 'Impossible de lire l\'extrait audio.');
          });
    },

    togglePlay() {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },

    updateVolume() {
      this.audio.volume = this.volume;
    },

    onEnded() {
      this.isPlaying = false;
    },

    onError() {
      this.isPlaying = false;
      console.error('Audio playback error');
    },

    isTrackPlaying(trackId) {
      return this.isPlaying && this.currentTrack && this.currentTrack.id === trackId;
    }
  }
}
</script>

<style scoped lang="scss">
.audio-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #333;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  .player-info {
    .now-playing {
      margin: 0;
      font-size: 14px;
    }
  }

  .player-controls {
    display: flex;
    align-items: center;
    gap: 15px;

    .play-button {
      background: #4a90e2;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 15px;
      cursor: pointer;

      &:hover {
        background: #357dcb;
      }
    }

    .volume-control {
      display: flex;
      align-items: center;

      .volume-slider {
        width: 100px;
        margin: 0;
      }
    }
  }
}
</style>