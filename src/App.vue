<template>
  <div class="app">
    <h1 class="title">🎵 Paroles de Chansons</h1>
    <SearchBar @onSearch="handleSearch" />
    <SongList :songs="songs" @selectSong="fetchLyrics" />
    <SongDetail v-if="selectedSong" :song="selectedSong" />
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
  padding: 2rem;
  font-family: sans-serif;
}
.title {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
