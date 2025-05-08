<template>
  <div class="app container">
    <h1 class="title text-center">🎵 Paroles de Chansons</h1>
    <SearchBar @onSearch="handleSearch" class="mb-3" />
    <SongList :songs="songs" @selectSong="fetchLyrics" class="card" />
    <SongDetail v-if="selectedSong" :song="selectedSong" class="mt-3" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import SongList from './components/SongList.vue'
import SongDetail from './components/SongDetail.vue'

const songs = ref([])
const selectedSong = ref(null)

async function handleSearch(query) {
  const res = await fetch(`https://api.lyrics.ovh/suggest/${query}`)
  const data = await res.json()
  songs.value = data.data
  selectedSong.value = null
}

async function fetchLyrics(song) {
  const res = await fetch(`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`)
  const data = await res.json()
  console.log(data)
  selectedSong.value = {
    title: song.title,
    artist: song.artist.name,
    album: song.album.title,
    preview: song.preview,
    lyrics: data.lyrics || 'Paroles non trouvées.'
  }
}
</script>

<style>
.app {
  max-width: 800px;
  margin: auto;
  padding: 2rem 1rem;
}

.title {
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2.2rem;
  position: relative;
  display: inline-block;
}

.title:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: linear-gradient(to right, var(--primary-light), var(--secondary-color));
  border-radius: 3px;
}

@media (max-width: 768px) {
  .app {
    padding: 1rem 0.5rem;
  }

  .title {
    font-size: 1.8rem;
  }
}
</style>
