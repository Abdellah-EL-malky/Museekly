<template>
  <div class="song-view">
    <SongDetails />
    <AudioPlayer v-if="currentSong && currentSong.preview" />
  </div>
</template>

<script>
import SongDetails from '@/components/song/SongDetails.vue';
import AudioPlayer from '@/components/player/AudioPlayer.vue';

export default {
  name: 'SongView',
  components: {
    SongDetails,
    AudioPlayer
  },
  computed: {
    currentSong() {
      return this.$store.state.currentSong;
    }
  }
}
</script>