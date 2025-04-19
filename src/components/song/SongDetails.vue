<template>
  <div class="song-details">
    <div v-if="loading" class="loading">
      Chargement des paroles...
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else class="lyrics-container">
      <div class="song-header">
        <button @click="goBack" class="back-button">
          Retour
        </button>

        <div class="song-meta">
          <h2 class="song-title">{{ songTitle }}</h2>
          <h3 class="song-artist">{{ songArtist }}</h3>
          <p class="song-album" v-if="currentSong && currentSong.album">
            Album: {{ currentSong.album.title }}
          </p>
        </div>
      </div>

      <div class="lyrics-content">
        <p v-if="!lyrics">Paroles non disponibles.</p>
        <div v-else v-html="formattedLyrics"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongDetails',
  computed: {
    currentSong() {
      return this.$store.state.currentSong;
    },
    lyrics() {
      return this.$store.state.lyrics;
    },
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    },
    songTitle() {
      return this.currentSong ? this.currentSong.title : this.$route.params.title;
    },
    songArtist() {
      return this.currentSong ? this.currentSong.artist.name : this.$route.params.artist;
    },
    formattedLyrics() {
      if (!this.lyrics) return '';

      // Remplacer les sauts de ligne par des balises <br>
      let formatted = this.lyrics.replace(/\n/g, '<br>');

      // Mettre en évidence les refrains (souvent indiqués par [Chorus], [Refrain], etc.)
      formatted = formatted.replace(/\[(.*?)\]/g, '<strong>[$1]</strong>');

      return formatted;
    },
  created() {
    // Fetch lyrics when component is created
    const artist = this.$route.params.artist;
    const title = this.$route.params.title;
    this.$store.dispatch('getLyrics', { artist, title });

    // If we don't have the song details but only the URL params
    if (!this.currentSong) {
      // You could fetch song details here if needed
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
.song-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .loading, .error {
    text-align: center;
    padding: 40px 0;
    color: #666;
  }

  .error {
    color: #e74c3c;
  }

  .lyrics-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    .song-header {
      padding: 20px;
      background: #f8f9fa;
      border-bottom: 1px solid #eee;
      position: relative;

      .back-button {
        position: absolute;
        top: 20px;
        left: 20px;
        padding: 8px 12px;
        background: #4a90e2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background: #357dcb;
        }
      }

      .song-meta {
        text-align: center;
        padding-top: 10px;

        .song-title {
          margin: 0 0 10px;
          font-size: 24px;
        }

        .song-artist {
          margin: 0 0 5px;
          font-size: 18px;
          color: #666;
        }

        .song-album {
          margin: 0;
          font-size: 14px;
          color: #888;
        }
      }
    }

    .lyrics-content {
      padding: 30px;
      line-height: 1.6;
      white-space: pre-wrap;
      font-size: 16px;
    }
  }
}
</style>